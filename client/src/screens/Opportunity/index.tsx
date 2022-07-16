import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, Linking } from 'react-native';
import HomePageButton from '../../components/HomePageButton';
import { db } from '../../../App';
import { get, ref } from 'firebase/database';

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
import Generic from '../../assets/GenericIcon.svg';
import Linkedin from '../../assets/LinkedInIcon.svg';
import Youtube from '../../assets/YoutubeIcon.svg';


import { HomePageButtonProps } from '../../components/HomePageButton';
import styles from './styles';

const getOpportunityData = async (oppID: string) => {
  const oppRef = ref(db, '/oports/' + oppID);
  let data: object | null = (await get(oppRef)).toJSON();
  return data;
}

interface OportData {
  name: string;
  pfp: string;
  about: string;
  color: string[];
  type: string[];
  links: object; 
  subtitle: string;
};

const openLink = (URL: string) => {
  Linking.openURL(URL).catch(err => {
    console.log(err);
  })
}

const Opportunity: React.FC = ({ route, navigation }) => {

  const [oportData, setOportData] = useState<null|OportData>(null); 
  const [isFavorite, setIsFavorite] = useState(false);
 
  const mainColor = ( oportData ? oportData.color[0] : 'transparent');
  const secColor = ( oportData ? oportData.color[1] : 'transparent');

  useEffect(() => {
    getOpportunityData(route.params.oppID)
      .then((data) => {
        setOportData(data as OportData);
      })
  }, [])
  
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
        <View style={{paddingBottom: 20, maxWidth: '85%'}}>
          <Text style={styles.oppName}>{route.params.name}</Text>
          <Text style={styles.oppType}>{
            (
              oportData?.subtitle ?
              oportData.subtitle :
              (
                oportData?.links ?
                Object.values(oportData?.type).join(', ') : 
                "" 
              )
            )
          }</Text>
        </View>

        <TouchableOpacity style={{paddingRight: 10}} onPress={() => { setIsFavorite(!isFavorite) }}>
          <Heart color={( isFavorite ? mainColor : '#646464')} width={40}/>
        </TouchableOpacity> 
      </View>

      <View style={{ paddingLeft: 20, marginRight: 40, alignSelf: 'flex-start'}}>
        <Text style={{fontSize: 24}}>Sobre</Text>
        <Text style={{textAlign: 'justify'}}>{oportData?.about}</Text>
      </View>
      
      <View style={{display: 'flex', width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', maxHeight: 60, marginVertical: 30}}>
        {/* no lugar desses hearts, colocar os icones das redes sociais */}

        {
          oportData?.links ?
          Object.values(oportData.links).map((item, idx) => {

            switch (item['0']) {
              case 1:
                return (
                  <TouchableOpacity onPress={() => openLink(item['1'])} key={`link__${idx}`}>
                    <Youtube color={mainColor} width={60}/>
                  </TouchableOpacity>
                )
              case 3:
                return (
                  <TouchableOpacity onPress={() => openLink(item['1'])} key={`link__${idx}`}>
                    <Instagram color={mainColor} width={60}/>
                  </TouchableOpacity>
                )                
              
              case 2:
                return (
                  <TouchableOpacity onPress={() => openLink(item['1'])} key={`link__${idx}`}>
                    <Facebook color={mainColor} width={60}/>
                  </TouchableOpacity>
                )

              case 9:
                return (
                  <TouchableOpacity onPress={() => openLink(item['1'])} key={`link__${idx}`}>
                    <Linkedin color={mainColor} width={60}/>
                  </TouchableOpacity>
                )

              default:
                return (
                  <TouchableOpacity onPress={() => openLink(item['1'])} key={`link__${idx}`}>
                    <Generic color={mainColor} width={60}/>
                  </TouchableOpacity>
                )
            }
          }) :
          null
        }

      </View>
      
      <TouchableOpacity style={{backgroundColor: mainColor, width: '50%', padding: 10, borderRadius: 100}}>
        <Text style={{textAlign: 'center', color: secColor}}>Link</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Opportunity;