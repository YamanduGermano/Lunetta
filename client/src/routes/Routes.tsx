import React from 'react';
import About from '../screens/About';
import Options from '../screens/Options';
import Popular from '../screens/Popular';
import Explore from '../screens/Explore';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Verified from '../screens/Verified';
import ForYou from '../screens/ForYou';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabRoutes: React.FC = () => {

  return (
    <Tab.Navigator initialRouteName="Explore">
      <Tab.Screen name="Explore" component={Explore}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="Notifications" component={Notifications}/>
      <Tab.Screen name="Options" component={Options}/>
    </Tab.Navigator>
  );

}


const Routes: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="TabRoutes">
      <Stack.Screen name="TabRoutes" component={TabRoutes}/>
      <Stack.Screen name="Verified" component={Verified}/>
      <Stack.Screen name="ForYou" component={ForYou}/>
      <Stack.Screen name="About" component={About}/>
      <Stack.Screen name="Popular" component={Popular}/>

    </Stack.Navigator>
  )
}

export default Routes;