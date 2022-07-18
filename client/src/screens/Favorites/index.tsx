import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { db } from '../../../App';
import { get, ref, query, orderByChild } from 'firebase/database';
import OpportunityListItem, {
	OpportunityListItemProps,
} from '../../components/OpportunityListItem';
import styles from './styles';
import LottieView from 'lottie-react-native';
import BigLoading from '../../components/LoadingAnimations';
import AuthContext from '../../contexts/auth';

const Favorites: React.FC = () => {
	const [popOpps, setPopOpps] = useState<any>(null);
	const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const [oports, setOports] = useState<null|object[]>(null);

	useEffect(() => {
    const favs = user?.favorites;

    if(!favs) setLoading(false);

    const ops = []
      favs?.forEach(opid => {
        const thisRef = ref(db, '/oports/'+opid);    
        const qry = query(thisRef);    
        get(qry)
          .then((opp) => {
            ops.push({
              oppID: opid,
              name: opp.val().name,
              imgUrl: opp.val().pfp,
            });
            setOports(ops);
            if(isLoading) setLoading(false);
          })
      }); {
      
    }

	}, []);

	const renderOpportunity: ListRenderItem<OpportunityListItemProps> = ({
		item,
	}) => <OpportunityListItem {...item} />;

	return (
		<View style={{ marginTop: 10 }}>
			{isLoading && <BigLoading />}
			{!isLoading && oports === null ? (
				<Text>Achei nada...</Text>
			) : (
				<FlatList
					data={oports}
					renderItem={renderOpportunity}
					keyExtractor={(item) => item.oppID as string}
					contentContainerStyle={styles.list}
				/>
			)}
		</View>
	);
};

export default Favorites;
