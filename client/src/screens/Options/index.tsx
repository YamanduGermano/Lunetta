import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import * as RootNavigation from '../../routes/RootNavigation';
import styles from './styles';

const Options: React.FC = () => {
	return (
		<View style={styles.mainview}>
			<TouchableOpacity
				onPress={() => {
					RootNavigation.navigate('About');
				}}>
				<Text style={styles.buttom}>Sobre Lunetta</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					RootNavigation.navigate('About');
				}}>
				<Text style={styles.buttom}>Github</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					RootNavigation.navigate('About');
				}}>
				<Text style={styles.buttom}>Licença</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					RootNavigation.navigate('About');
				}}>
				<Text style={styles.sair}>Sair da Conta</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Options;
