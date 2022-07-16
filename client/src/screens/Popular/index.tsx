import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { db } from '../../../App';
import { get, ref, query, orderByChild } from 'firebase/database';
import OpportunityListItem, {
	OpportunityListItemProps,
} from '../../components/OpportunityListItem';
import styles from './styles';
import LottieView from 'lottie-react-native';

const Loading: React.FC = () => {
	return (
		<View
			style={{
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<LottieView
				style={{ width: '80%' }}
				source={require('../../assets/Animations/Loading.json')}
				autoPlay={true}
				loop={true}
			/>
		</View>
	);
};

const Popular: React.FC = () => {
	const [popOpps, setPopOpps] = useState<any>(null);
	const [isLoading, setLoading] = useState(true);

	//   useEffect(() => {
	//     const oppsRef = ref(db, 'oports/');
	//     const qry = query(oppsRef, orderByChild("viewcount"));
	//     // console.log(oppsRef);
	//     get(qry)
	//       .then(opps => {
	//         // console.log(opps);
	//         opps = opps.toJSON();
	//         const oppsList: { oppID: string; name: any; imgUrl: any; }[] = [];
	//         Object.keys(opps).forEach(elem => {
	//           oppsList.push({
	//             oppID: elem,
	//             name: opps[elem].name,
	//             imgUrl: opps[elem].pfp
	//           })
	//         });
	//         setPopOpps(oppsList);
	//         setLoading(false);
	//       })
	//   }, [])

	const renderOpportunity: ListRenderItem<OpportunityListItemProps> = ({
		item,
	}) => <OpportunityListItem {...item} />;

	return (
		<View style={{ marginTop: 10 }}>
			{isLoading && <Loading />}
			{!isLoading && popOpps === null ? (
				<Text>Achei nada...</Text>
			) : (
				<FlatList
					data={popOpps}
					renderItem={renderOpportunity}
					keyExtractor={(item) => item.oppID as string}
					contentContainerStyle={styles.list}
				/>
			)}
		</View>
	);
};

export default Popular;
