import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const About: React.FC = () => {
	return (
		<View style={styles.mainview}>
			<Text style={styles.texto}>
				A educação brasileira tem diversos problemas e nós, os criadores do
				Lunetta sentimos isso na pele. Contudo, durante nossa caminhada, tivemos
				oportunidades acadêmicas que mudaram completamente nossa trajetória. Por
				isso, desenvolvemos o Lunetta, uma forma de facilitar o contato de
				alunos com oportunidades incríveis, para que todos os alunos possam
				usufruir do poder transformador da educação.
			</Text>
			<Text></Text>
			<Text style={styles.titulo}>Imaginado e desenvolvido por:</Text>
			<Text style={styles.texto}>
				Ana Cristina da Costa Santana Erick Cassiano da Silva Passos Maria Luiza
				dos Santos Rodrigues Yamandú Germano Cavalcanti
			</Text>
		</View>
	);
};

export default About;
