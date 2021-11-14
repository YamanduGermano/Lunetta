import React from 'react';
import { View, Text, Button } from 'react-native';
import * as RootNavigation from '../../routes/RootNavigation';


const Options: React.FC = () => {
  return (
    <View>
      <Text>Essa é a pagina de configurações.</Text>
      <Button
        title="Sobre nós"
        onPress={() => {RootNavigation.navigate('About')}}
      />
    </View>
  )
}

export default Options;