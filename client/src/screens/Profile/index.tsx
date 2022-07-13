import React from 'react';
import { View, Text, Button } from 'react-native';
import * as RootNavigation from '../../routes/RootNavigation';
import styles from './styles';

let user = {
	nome: 'Fulano',
	cidade: 'Acre',
	idade: 20,
	serie: '3o Ano',
	escola: 'Colégio pH Freguesia',
	descricao:
		'Gosto de programação e criei um canal no youtube chamado Codae pra ensinar a outras pessoas :)',
};

const Profile: React.FC = () => {
	return (
		<View style={styles.mainview}>
			<View style={styles.maininfo}>
				<View style={styles.picture} />
				<View style={styles.textos}>
					<Text style={styles.nome}>{user.nome}</Text>
					<Text style={styles.cidade}>{user.cidade}</Text>
				</View>
			</View>

			<View style={styles.detalhesview}>
				<Text style={styles.nome}>Sobre</Text>
				<View style={styles.descricaoview}>
					<Text style={styles.detalhes}>Idade: {user.idade}</Text>
					<Text style={styles.detalhes}>Série: {user.serie}</Text>
					<Text style={styles.detalhes}>Escola: {user.escola}</Text>
					<Text></Text>
					<Text style={styles.detalhes}>{user.descricao}</Text>
				</View>
			</View>

			<View style={styles.detalhesview}>
				<Text style={styles.nome}>Processos Seletivos</Text>
				<View style={styles.descricaoview}></View>
			</View>
		</View>
	);
};

export default Profile;
