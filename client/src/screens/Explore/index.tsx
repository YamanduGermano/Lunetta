import React from 'react';
import { View, Text, Button } from 'react-native';
import * as RootNavigation from '../../routes/RootNavigation';

const Explore: React.FC = () => {

  return (
    <View>
      <Text>Essa é a pagina de explorar.</Text>
      <Button
        title="Populares"
        onPress={() => {RootNavigation.navigate('Popular')}}
      />

      <Button
        title="Para Você"
        onPress={() => {RootNavigation.navigate('ForYou')}}
      />

      <Button
        title="Verificados"
        onPress={() => {RootNavigation.navigate('Verified')}}
      />
    </View>
  )
}

export default Explore;