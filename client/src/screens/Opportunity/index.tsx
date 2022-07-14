import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import HomePageButton from '../../components/HomePageButton';

import * as RootNavigation from '../../routes/RootNavigation';

import Fire from '../../assets/fire.svg';
import Verified from '../../assets/verified.svg';
import Heart from '../../assets/heart.svg';
import Categories from '../../assets/categories.svg';
import Lunetta from '../../assets/lunetta.svg'

import { HomePageButtonProps } from '../../components/HomePageButton';
import styles from './styles';



const Opportunity: React.FC = ({ route, navigation }) => {
  
  console.log(route.params.imgUrl)
  return (
    <View style={{marginHorizontal: 10, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

      <Image
        style={styles.oppImg}
        source={{
          uri: route.params.imgUrl,
        }}
      />
      <View style={{width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{paddingVertical: 20}}>
          <Text style={styles.oppName}>{route.params.name}</Text>
          <Text style={styles.oppType}>Oportunidade</Text>
        </View>

        <View style={{paddingRight: 10}}>
          <Heart color={'#646464'} width={40}/>
        </View>
      </View>

      <View style={{ paddingLeft: 20, marginRight: 40, marginBottom: 10}}>
        <Text style={{fontSize: 24}}>Sobre</Text>
        <Text style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates similique autem voluptatem nemo? Ducimus accusamus laudantium cum necessitatibus vero illum voluptatibus, labore quisquam a officiis hic impedit molestiae reiciendis placeat!</Text>
      </View>
      
      <View style={{display: 'flex', width: '80%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', padding: 10}}>
        {/* no lugar desses hearts, colocar os icones das redes sociais */}
        <Heart color={'#646464'} width={40}/>
        <Heart color={'#646464'} width={40}/>
        <Heart color={'#646464'} width={40}/>
        <Heart color={'#646464'} width={40}/>
      </View>
      
      <TouchableOpacity style={{backgroundColor: '#003E77', width: '50%', padding: 10, borderRadius: 100}}>
        <Text style={{textAlign: 'center', color: 'white'}}>Link</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Opportunity;