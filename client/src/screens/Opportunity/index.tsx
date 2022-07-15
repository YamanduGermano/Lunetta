import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import HomePageButton from '../../components/HomePageButton';

import * as RootNavigation from '../../routes/RootNavigation';

import Fire from '../../assets/fire.svg';
import Verified from '../../assets/verified.svg';
import Heart from '../../assets/heart.svg';
import Categories from '../../assets/categories.svg';
import Lunetta from '../../assets/lunetta.svg'
import Instagram from '../../assets/InstagramIcon.svg';
import Discord from '../../assets/DiscordIcon.svg';
import Facebook from '../../assets/FacebookIcon.svg';
import Twitter from '../../assets/TwitterIcon.svg';


import { HomePageButtonProps } from '../../components/HomePageButton';
import styles from './styles';



const Opportunity: React.FC = ({ route, navigation }) => {

  const mainColor = '#003E77';
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <View style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'scroll'}}>

      <View style={{width: '90%', height: 100, backgroundColor: mainColor, borderRadius: 25}}>

      </View>
      <Image
        style={styles.oppImg}
        source={{
          uri: route.params.imgUrl,
        }}
      />
      <View style={{width: '90%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{paddingBottom: 20}}>
          <Text style={styles.oppName}>{route.params.name}</Text>
          <Text style={styles.oppType}>Oportunidade</Text>
        </View>

        <TouchableOpacity style={{paddingRight: 10}} onPress={() => { setIsFavorite(!isFavorite) }}>
          
          <Heart color={( isFavorite ? mainColor : '#646464')} width={40}/>
        </TouchableOpacity> 
      </View>

      <View style={{ paddingLeft: 20, marginRight: 40}}>
        <Text style={{fontSize: 24}}>Sobre</Text>
        <Text style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates similique autem voluptatem nemo? Ducimus accusamus laudantium cum necessitatibus vero illum voluptatibus, labore quisquam a officiis hic impedit molestiae reiciendis placeat!</Text>
      </View>
      
      <View style={{display: 'flex', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginVertical: 30, height: 60}}>
        {/* no lugar desses hearts, colocar os icones das redes sociais */}
        <Instagram color={mainColor} width={60}/>
        <Discord color={mainColor} width={60}/>
        <Facebook color={mainColor} width={60}/>
        <Twitter color={mainColor} width={60}/>

      </View>
      
      <TouchableOpacity style={{backgroundColor: mainColor, width: '50%', padding: 10, borderRadius: 100}}>
        <Text style={{textAlign: 'center', color: 'white'}}>Link</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Opportunity;