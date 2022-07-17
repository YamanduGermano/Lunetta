import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import { theme } from '../global/styles/theme';
import * as RootNavigation from './RootNavigation';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import citiesData from '../assets/data/estados-cidades.json';
import { db } from '../../App';
import { get, ref, update } from 'firebase/database';
import AuthContext from '../contexts/auth';
import { UserData } from '../contexts/auth';

import Styles from './styles';
import styles from '../components/OpportunityListItem/styles';

const SetupRoutes: React.FC = () => {
	const [currScreen, setCurrScreen] = useState('greeting');
	const [userInfo, setUserInfo] = useState({});
	const [city, setCity] = useState('');
	const [uf, setUF] = useState('');
	const [studyLevel, setStudyLevel] = useState('');
	const [about, setAbout] = useState('');
	const [pfp, setPfp] = useState(1);
	const [stateIdx, setStateIdx] = useState(0);
	const [interesses, setInteresses] = useState([]);
	const [extracurriculares, setExtracurriculares] = useState([]);
	const { user, updateUserInfo } = useContext(AuthContext);

	const updateDBUserInfo = () => {
		if (user) {
			const dbRef = ref(db, '/users/' + user?.uid);
			const updates: any = {};
			updates['/about'] = about;
			updates['/pfp'] = pfp;
			updates['/uf'] = uf;
			updates['/city'] = city;
			updates['/interesses'] = interesses;
			updates['/extracurriculares'] = extracurriculares;
			updates['/isNew'] = false;
            updates['/serie'] = studyLevel;

			return update(dbRef, updates);
		}
	};

	if (currScreen == 'greeting') {
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={{ marginTop: 40, paddingHorizontal: 30 }}>
						<Text style={Styles.titulo}>Olá!</Text>
						<Text style={Styles.texto}>
							Nós do Lunetta temos a missão de te conectar com as diversas
							oportunidades que existem no mundo.
						</Text>
						<Text style={Styles.texto}>
							Para facilitar esse processo, seria legal se você contasse um
							pouco mais sobre você!
						</Text>
						<Text style={Styles.texto}>
							Criando seu perfil, será bem mais fácil de te recomendarmos
							oportunidades perfeitas e para as instituições conhecerem mais
							sobre seus interesses e aspirações.
						</Text>
						<Text style={Styles.texto}>
							Mas fique tranquilo! Nada é obrigatório. Preencha somente o que
							você se sente confortável em compartilhar.
						</Text>
						<View
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								marginVertical: 30,
							}}>
							<TouchableOpacity
								style={[Styles.enviar, { width: '100%' }]}
								onPress={() => setCurrScreen('firstly')}>
								<Text
									style={{
										color: 'white',
										textAlign: 'center',
										fontSize: 17,
										marginHorizontal: 30,
									}}>
									Vamos lá!
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	} else if (currScreen == 'firstly') {
		return (
			<SafeAreaView>
				<ScrollView>
					<View style={{ marginTop: 50, paddingHorizontal: 30 }}>
						<Text style={Styles.titulo}>Seus Dados</Text>
						<Text style={Styles.texto}>
							Vamos configurar as suas informações pessoais.
						</Text>
						<Text style={Styles.texto}>
							Escolha um desses avatares para seu perfil:
						</Text>
						<Text style={Styles.info}>
							No Lunetta, acreditamos que as únicas coisas que importam em
							processos seletivos são seu comprometimento e vontade de aprender.
							Assim, o uso de avatares simples permite que os processos
							seletivos foquem somente nas suas informações e motivações.
						</Text>

						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginVertical: 30,
								justifyContent: 'center',
							}}>
							<TouchableOpacity onPress={() => setPfp(1)}>
								<Image
									style={{
										width: 75,
										height: 75,
										borderColor: '#2095FF',
										borderRadius: 1000,
										borderWidth: pfp === 1 ? 5 : 0,
										marginHorizontal: 5,
									}}
									source={require('../assets/pfp1.png')}
								/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => setPfp(2)}>
								<Image
									style={{
										width: 75,
										height: 75,
										borderColor: '#2095FF',
										borderRadius: 1000,
										borderWidth: pfp === 2 ? 5 : 0,
										marginHorizontal: 5,
									}}
									source={require('../assets/pfp2.png')}
								/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => setPfp(3)}>
								<Image
									style={{
										width: 75,
										height: 75,
										borderColor: '#2095FF',
										borderRadius: 1000,
										borderWidth: pfp === 3 ? 5 : 0,
										marginHorizontal: 5,
									}}
									source={require('../assets/pfp3.png')}
								/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => setPfp(4)}>
								<Image
									style={{
										width: 75,
										height: 75,
										borderColor: '#2095FF',
										borderRadius: 1000,
										borderWidth: pfp === 4 ? 5 : 0,
										marginHorizontal: 5,
									}}
									source={require('../assets/pfp4.png')}
								/>
							</TouchableOpacity>
						</View>

						<Text style={Styles.texto}>De onde você é?</Text>
						<Text style={Styles.info}>
							Essa informação será usada para escolher oportunidades que estejam
							perto de você.
						</Text>

						{/* fazer aquilo de poder selecionar o estado e dps a cidade. se nao der tempo, deixar só um text input mesmo */}

						<View
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'center',
								flexWrap: 'wrap',
								marginVertical: 30,
							}}>
							<SelectDropdown
								buttonStyle={Styles.dropdown}
								buttonTextStyle={{ fontSize: 17 }}
								data={citiesData.estados}
								rowTextForSelection={(item, index) => {
									return item.nome + ' - ' + item.sigla;
								}}
								buttonTextAfterSelection={(selectedItem, index) => {
									return selectedItem.sigla;
								}}
								onSelect={(selectedItem, index) => {
									setUF(selectedItem.sigla);
									setStateIdx(index);
								}}
								defaultValue={uf}
								defaultButtonText={uf.length > 0 ? uf : 'Estado'}
							/>

							<SelectDropdown
								buttonStyle={Styles.dropdown}
								buttonTextStyle={{ fontSize: 17 }}
								data={citiesData.estados[stateIdx].cidades}
								rowTextForSelection={(item, index) => {
									return item;
								}}
								buttonTextAfterSelection={(selectedItem, index) => {
									return selectedItem;
								}}
								onSelect={(selectedItem, index) => {
									setCity(selectedItem);
								}}
								defaultValue={city}
								defaultButtonText={city.length > 0 ? city : 'Cidade'}
							/>
						</View>

						<Text style={Styles.texto}>Qual seu grau de escolaridade?</Text>
						<Text style={Styles.info}>
							Por exemplo: “9º ano do Ensino Fundamental” ou “2º período de
							Engenharia Química”
						</Text>

						<View>
							<TextInput
								style={[Styles.input, { marginVertical: 30 }]}
								value={studyLevel}
								onChangeText={setStudyLevel}
								placeholder='Grau de escolaridade'
							/>
						</View>

						<Text style={Styles.texto}>Algo mais?</Text>
						<Text style={Styles.info}>
							Aqui você pode adicionar algumas informações extras sobre você,
							para que as instituições te conheçam um pouco melhor. Você pode
							falar sobre seu hobby ou seu maior sonho, por exemplo.
						</Text>

						<View>
							<TextInput
								style={[Styles.input, { marginVertical: 30 }]}
								value={about}
								onChangeText={setAbout}
								placeholder='Digite algo sobre você'
							/>
						</View>

						<TouchableOpacity
							style={[
								Styles.enviar,
								{ width: '80%', marginTop: 40, marginBottom: 60 },
							]}
							onPress={() => {
								console.log(city);
								console.log(uf);
								setCurrScreen('end');
							}}>
							<Text
								style={{
									color: 'white',
									textAlign: 'center',
									fontSize: 17,
									marginHorizontal: 30,
								}}>
								Prontinho
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	} else if (currScreen == 'end') {
		return (
			<SafeAreaView>
				<View style={{ marginTop: 50 }}>
					<Text>Por fim...</Text>
					<Text>
						Alguns processos seletivos pedem para que você fale um pouco sobre
						você e as atividades que você já fez. Lembrar de todas as coisas
						pode ser trabalhoso, então você pode deixar tudo salvo aqui no
						Lunetta.
					</Text>
					<Text>Suas Atividades</Text>
					{/* essa lista de extracurriculares vai ser chatinha pra fazer... */}
					<View>{/* lista de ECs */}</View>

					<Text>
						Agora, selecione quaisquer temas pelos quais você se interessa! Nós
						vamos escolher oportunidades que se encaixam nessas categorias,
						especialmente para você.
					</Text>
					<Text>
						Fique tranquilo! Você pode alterar isso depois nas configurações do
						seu perfil.
					</Text>

					{/* nem tem isso no figma, nao sei como vou fazer pra selecionar os interesses */}

					<TouchableOpacity
						style={{ backgroundColor: 'darkblue', width: '50%' }}
						onPress={async () => {
							await updateDBUserInfo();
							await updateUserInfo();

							// fazer mostrar um loading aqui talvez
						}}>
						<Text style={{ color: 'white' }}>Terminei!</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{ backgroundColor: 'darkblue', width: '50%', marginTop: 20 }}
						onPress={() => setCurrScreen('greeting')}>
						<Text style={{ color: 'white' }}>voltar (pra debug)</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}

	return <Text>Vixe</Text>;
};

export default SetupRoutes;
