import React, { useContext } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import AuthContext from '../../contexts/auth';
import styles from './styles';

import Loading from '../../components/LoadingAnimations';

const Login: React.FC = () => {
	const [Nome, changeNome] = React.useState('');
	const [Email, changeEmail] = React.useState('');
	const [Senha, changeSenha] = React.useState('');
	const [ConfirmarSenha, changeConfirmarSenha] = React.useState('');

	const [Criar, changeCriar] = React.useState(false);
	const [Instituicao, changeInstituicao] = React.useState(false);

	const { signIn, signUp } = useContext(AuthContext);

	const [LoadingAnim, changeLoadingAnim] = React.useState(true);
	const { signed } = useContext(AuthContext);
	setTimeout(() => changeLoadingAnim(signed), 3000);

	const handlePress = () => {
		changeLoadingAnim(true);
		if (!Criar && !Instituicao) {
			signIn(Email, Senha);
		} else if (Criar && !Instituicao) {
			if (Senha.trim() === ConfirmarSenha.trim()) {
				signUp(Email, Senha, Nome);
			}
		}
		setTimeout(() => changeLoadingAnim(false), 10000);
	};

	return (
		<View>
			<View
				style={[styles.mainview, { display: LoadingAnim ? 'none' : 'flex' }]}>
				<View>
					<Text style={styles.titulo}>Conecte-se!</Text>
					<Text style={styles.subtitulo}>É gratuito.</Text>
				</View>

				{/* Fazer Login - Aluno */}
				<View style={{ display: !Criar && !Instituicao ? 'flex' : 'none' }}>
					<View style={styles.dadosview}>
						<TextInput
							style={styles.input}
							onChangeText={changeEmail}
							value={Email}
							placeholder='Email do aluno'
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeSenha}
							value={Senha}
							placeholder='Senha'
							secureTextEntry={true}
						/>
					</View>
				</View>

				{/* Criar Conta - Aluno */}
				<View style={{ display: Criar && !Instituicao ? 'flex' : 'none' }}>
					<View style={styles.dadosview}>
						<TextInput
							style={styles.input}
							onChangeText={changeNome}
							value={Nome}
							placeholder='Nome completo do aluno'
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeEmail}
							value={Email}
							placeholder='Email do aluno'
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeSenha}
							value={Senha}
							placeholder='Senha'
							secureTextEntry={true}
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeConfirmarSenha}
							value={ConfirmarSenha}
							placeholder='Confirmar senha'
							secureTextEntry={true}
						/>
					</View>
				</View>

				{/* Criar Conta - Instituição */}
				<View style={{ display: Instituicao && Criar ? 'flex' : 'none' }}>
					<View style={styles.dadosview}>
						<TextInput
							style={styles.input}
							onChangeText={changeNome}
							value={Nome}
							placeholder='Nome da Instituição'
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeEmail}
							value={Email}
							placeholder='Email da Instituição'
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeSenha}
							value={Senha}
							placeholder='Senha'
							secureTextEntry={true}
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeConfirmarSenha}
							value={ConfirmarSenha}
							placeholder='Confirmar senha'
							secureTextEntry={true}
						/>
					</View>
				</View>

				{/* Fazer Login - Instituição */}
				<View style={{ display: Instituicao && !Criar ? 'flex' : 'none' }}>
					<View style={styles.dadosview}>
						<TextInput
							style={styles.input}
							onChangeText={changeEmail}
							value={Email}
							placeholder='Email da Instituição'
							textContentType='emailAddress'
						/>
						<TextInput
							style={styles.input}
							onChangeText={changeSenha}
							value={Senha}
							placeholder='Senha'
							secureTextEntry={true}
						/>
					</View>
				</View>

				<TouchableOpacity onPress={handlePress}>
					<Text style={styles.enviar}>{Criar ? 'Criar Conta' : 'Login'}</Text>
				</TouchableOpacity>

				<View style={styles.opcoesview}>
					<TouchableOpacity onPress={() => changeCriar(!Criar)}>
						<Text style={styles.opcoes}>
							{Criar
								? 'Já tem uma conta? Faça Login!'
								: 'Não tem uma conta? Crie uma!'}
						</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					onPress={() => {
						changeInstituicao(!Instituicao);
					}}>
					<Text style={styles.opcoes}>
						{Instituicao
							? 'Você é um estudante? Faça login aqui!'
							: 'Você tem alguma oportunidade para oferecer? Crie uma conta de instituição'}
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ display: !LoadingAnim ? 'none' : 'flex' }}>
				<Loading />
			</View>
		</View>
	);
};

export default Login;
