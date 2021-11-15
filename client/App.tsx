import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { navigationRef }from './src/routes/RootNavigation';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { 
  OpenSans_700Bold,
  OpenSans_400Regular, 
  OpenSans_300Light 
} from '@expo-google-fonts/open-sans';

const App : React.FC = () => {

  const [fontsLoaded] = useFonts({
    OpenSans_700Bold,
    OpenSans_400Regular, 
    OpenSans_300Light 
  });

  if(!fontsLoaded) {
    return (
      <AppLoading/>
    )
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Routes/>
    </NavigationContainer>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;