import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/routes/Routes';
import { navigationRef } from './src/routes/RootNavigation';
import { initializeApp } from 'firebase/app';
import { AuthProvider } from './src/contexts/auth';

// Optionally import the services that you want to use
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, get, ref } from 'firebase/database';
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);

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

// Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyAYIS-gmYIBndISICHRiMnz8q1vca6v82I',
	// authDomain: 'project-id.firebaseapp.com',
	databaseURL: 'https://lunetta-60703-default-rtdb.firebaseio.com',
	projectId: 'lunetta-60703',
	storageBucket: 'mobileapp',
	appId: 'app-id',
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

// Provisório aqui
import Provisorio from './src/routes/setup.routes';

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
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</NavigationContainer>
		// <Provisorio />
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
