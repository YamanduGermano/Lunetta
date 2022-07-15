import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const Login: React.FC = () => {
	const [Nome, changeNome] = React.useState('');
	const [Email, changeEmail] = React.useState('');
	const [Senha, changeSenha] = React.useState('');
	const [ConfirmarSenha, changeConfirmarSenha] = React.useState('');

	const [Criar, changeCriar] = React.useState(true);

	return (
		<View style={styles.mainview}>
			<View>
				<Text style={styles.titulo}>Conecte-se!</Text>
				<Text style={styles.subtitulo}>É gratuito.</Text>
			</View>
			<View style={styles.dadosview}>
				<TextInput
					style={styles.input}
					onChangeText={changeNome}
					value={Nome}
					placeholder='Nome Completo'
				/>
				<TextInput
					style={styles.input}
					onChangeText={changeEmail}
					value={Email}
					placeholder='Email'
				/>
				<TextInput
					style={styles.input}
					onChangeText={changeSenha}
					value={Senha}
					placeholder='Senha'
				/>
				<TextInput
					style={styles.input}
					value={Senha}
					placeholder='Confirmar senha'
				/>
			</View>

			<TouchableOpacity>
				<Text style={styles.enviar}>Criar Conta</Text>
			</TouchableOpacity>

			<View style={styles.opcoesview}>
				<TouchableOpacity>
					<Text style={styles.opcoes}>Já tem uma conta? Faça Login!</Text>
				</TouchableOpacity>

				<TouchableOpacity>
					<Text style={styles.opcoes}>
						Você tem alguma oportunidade para oferecer? Crie uma conta de
						instituição
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Login;
