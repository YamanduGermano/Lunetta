import React from 'react';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import OpportunityListItem, { OpportunityListItemProps } from '../../components/OpportunityListItem';
import styles from './styles';

const opps: OpportunityListItemProps[] = [
  {
    oppID: '1',
    name: 'Codae School',
    details: [
      {
        title: 'TIPO',
        value: 'Escola'
      },
      {
        title: 'LUGAR',
        value: 'Online'
      }
    ],
    imgUrl: 'https://yt3.ggpht.com/u_qx6aHt0PoNOjs_tBCM-ECsVqv3iTIkzd_SLq0lj9k7qJvTNCRstI_K3m4oSdSXnTF-Hp9ihzk=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    oppID: '2',
    name: 'OBT',
  },
  {
    oppID: '3',
    name: 'ISMART',
  },
  {
    oppID: '4',
    name: 'OBI',
  },
  {
    oppID: '5',
    name: 'AlphaLumen',
  },
  {
    oppID: '6',
    name: 'Estudar Fora',
  },
  {
    oppID: '7',
    name: 'Escola Sesc',
  },
  {
    oppID: '8',
    name: 'Ismart Online',
  },
]

const Popular: React.FC = () => {

  const renderOpportunity: ListRenderItem<OpportunityListItemProps> = ({ item }) => (
    <OpportunityListItem {...item} />
  )

  return (
    <View style={{marginTop: 10}}>
      <FlatList
        data={opps}
        renderItem={renderOpportunity}
        keyExtractor={(item) => (item.oppID as string)}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

export default Popular;