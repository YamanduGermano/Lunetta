import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import OppArrow from '../../assets/opparrow.svg';
import * as RootNavigation from '../../routes/RootNavigation';


export type Detail = {
  title: string;
  value: string;
}

export interface OpportunityListItemProps {
  oppID?: string;
  name: string;
  imgUrl?: string;
  details?: Detail[];
}

const OpportunityListItem: React.FC<OpportunityListItemProps> = ({ oppID, name, imgUrl, details }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUrl }} style={styles.image}/>
      <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={() => RootNavigation.navigate('Opportunity', {oppID, name, imgUrl, details})}>
        <View style={styles.oppInfo}>
          <Text style={styles.oppName}>{name}</Text>
          {details?.map((detail, idx) => (
            <Text style={styles.oppDetail} key={idx}>{detail.title}: {detail.value}</Text>
          ))}
        </View>
        <View style={styles.arrow}>
          <OppArrow width={15} height={30}/>
        </View>
        
      </TouchableOpacity>
    </View>
  )
}

export default OpportunityListItem;