import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AuthContext from '../../contexts/auth';
import * as RootNavigation from '../../routes/RootNavigation';
import styles from './styles';

const Options: React.FC = () => {

	const { signOut } = useContext(AuthContext);
	
	return (
		<View style={styles.mainview}>
			<TouchableOpacity
				onPress={() => {
					RootNavigation.navigate('About');
				}}>
				<Text style={styles.buttom}>Sobre Lunetta</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => {}}>
				<Text style={styles.buttom}>Github</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					RootNavigation.navigate('Privacy');
				}}>
				<Text style={styles.buttom}>Política de Privacidade</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					RootNavigation.navigate('Licence');
				}}>
				<Text style={styles.buttom}>Licença</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => {signOut()}}>
				<Text style={styles.sair}>Sair da Conta</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Options;
