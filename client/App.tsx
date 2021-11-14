import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { navigationRef }from './src/routes/RootNavigation';

const App : React.FC = () => (
  <NavigationContainer ref={navigationRef}>
    <Routes/>
  </NavigationContainer>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;