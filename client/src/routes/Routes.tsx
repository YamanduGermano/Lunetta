import React from 'react';
import { View } from 'react-native'; 
import { theme } from '../global/styles/theme';
import * as RootNavigation from './RootNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// TABS
import Options from '../screens/Options';
import Notifications from '../screens/Notifications';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';

// EXPLORE SCREENS
import Popular from '../screens/Popular';
import Verified from '../screens/Verified';
import ForYou from '../screens/ForYou';
import Favorites from '../screens/Favorites';
import Categories from '../screens/Categories';

// OPTIONS SCREENS
import About from '../screens/About';

// ICONS
import Close from '../assets/close.svg';
import Opportunity from '../screens/Opportunity';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const header = {
  headerStyle: {
    height: 110,
  },
  headerTitleStyle: {
    fontFamily: theme.fonts.bold,
    fontSize: 36, 
  },
  headerShadowVisible: false,
}

const TabRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Explore" screenOptions={header}>
      <Tab.Screen name="Explore" component={Explore} options={{ title: "Explorar" }}/>
      <Tab.Screen name="Profile" component={Profile} options={{ title: "Perfil" }}/>
      <Tab.Screen name="Notifications" component={Notifications} options={{ title: "Notificações" }}/> 
      <Tab.Screen name="Options" component={Options} options={{ title: "Opções" }}/>
    </Tab.Navigator>
  );
}

//TODO: colocar esses componentes em outra pasta, pra nao importar o react native aqui
const HeaderLeftButton: React.FC = () => {
  return <View style={{width: 0, height: 0}}/>
}

const HeaderRightButton:React.FC = () => {
  return (
    <View style={{ justifyContent: 'center', height: 85}}>
      <Close height={25} width={25} onPress={() => RootNavigation.goBack()}/>
    </View>
  )
}

const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="TabRoutes" screenOptions={{
      headerLeft: () => (<HeaderLeftButton/>),
      headerRight: () => (<HeaderRightButton/>),
      headerTitleStyle: header.headerTitleStyle,
      headerShadowVisible: header.headerShadowVisible,
    }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} options={{
      headerShown: false,
    }}/>
      <Stack.Screen name="Verified" component={Verified} options={{ title: "Verificados" }}/>
      <Stack.Screen name="Popular" component={Popular} options={{ title: "Populares" }}/>
      <Stack.Screen name="ForYou" component={ForYou} options={{ title: "Para Você" }}/>
      <Stack.Screen name="About" component={About} options={{ title: "Sobre Nós" }}/>
      <Stack.Screen name="Favorites" component={Favorites} options={{ title: "Favoritos" }}/>
      <Stack.Screen name="Categories" component={Categories} options={{ title: "Categorias" }}/>
      <Stack.Screen name="Opportunity" component={Opportunity} options={{ title: "", presentation: "modal" }}/>

      
    </Stack.Navigator>
  )
}

export default Routes;