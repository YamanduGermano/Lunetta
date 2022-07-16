import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import ExtracurricularesItem, {
	ExtracurricularesProps,
} from '../../components/ExtracurricularesItem';
import AuthContext from '../../contexts/auth';

let fakeUser = {
	nome: 'Fulano',
	cidade: 'Acre',
	idade: 20,
	serie: '3o Ano',
	escola: 'Colégio pH Freguesia',
	descricao:
		'Gosto de programação e criei um canal no youtube chamado Codae pra ensinar a outras pessoas :)',
};

const Extracurriculares: ExtracurricularesProps = [
	{
		key: 1,
		nome: 'Codae',
		duracao: '2020',
		descricao: 'um projeto onde eu dou aula de programacao :D',
		notas: 'tem uma galera que gosta, te falar em',
	},
	{
		key: 2,
		nome: 'OBT',
		duracao: '2022',
		descricao: 'Olimpíada de tecnologia super diferenciada',
		notas: 'Medalha de ouro com protótipo de App e 5o melhor video de pitch!',
	},
];

const Profile: React.FC = () => {

	const {user} = useContext(AuthContext);


	return (
		<View style={styles.mainview}>
			<View style={styles.maininfo}>
				<View style={styles.picture} />
				<View style={styles.textos}>
					<Text style={styles.nome}>{user?.name}</Text>
					<Text style={styles.cidade}>{user?.city}</Text>
				</View>
			</View>

			<View style={styles.detalhesview}>
				<Text style={styles.nome}>Sobre</Text>
				<View style={styles.descricaoview}>
					{
						user?.age && <Text style={styles.detalhes}>Idade: {user?.age}</Text>
					}
					{
						user?.grade && <Text style={styles.detalhes}>Série: {user?.grade}</Text>
					}
					{
						user?.school && <Text style={styles.detalhes}>Escola: {user?.school}</Text>
					}
					<Text style={styles.detalhes}>{user?.about ? user?.about : "Olá! Sou um usuário do Lunetta!"}</Text>
				</View>
			</View>

			<View style={styles.detalhesview}>
				<Text style={styles.nome}>Extracurriculares</Text>

				<View style={styles.descricaoview}>
					<FlatList
						data={Extracurriculares}
						renderItem={({ item }) => (
							<ExtracurricularesItem
								nome={item.nome}
								duracao={item.duracao}
								descricao={item.descricao}
								nota={item.nota}
							/>
						)}
					/>
				</View>
			</View>
		</View>
	);
};

export default Profile;
