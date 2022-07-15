import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { navigationRef } from './src/routes/RootNavigation';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import {
	OpenSans_700Bold,
	OpenSans_400Regular,
	OpenSans_300Light,
} from '@expo-google-fonts/open-sans';

const myTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
	},
};

const App: React.FC = () => {
	const [fontsLoaded] = useFonts({
		OpenSans_700Bold,
		OpenSans_400Regular,
		OpenSans_300Light,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<NavigationContainer ref={navigationRef} theme={myTheme}>
			<Routes />
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
