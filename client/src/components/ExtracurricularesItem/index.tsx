import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export interface ExtracurricularesProps {
	nome: string;
	duracao: string;
	descricao: string;
	notas?: string;
}

const Extracurricular: React.FC<ExtracurricularesProps> = ({
	nome,
	duracao,
	descricao,
	notas = false,
}) => {
	return (
		<View>
			<View style={styles.item}>
				<TouchableOpacity style={styles.header}>
					<Text style={styles.nome}>{nome}</Text>
					<Text>{duracao}</Text>
				</TouchableOpacity>
				<View style={styles.descricao}>
					<View>
						<Text style={styles.nomedescricao}>Descrição</Text>
						<Text style={styles.infodescricao}>{descricao}</Text>
					</View>

					{notas == true ? (
						<View>
							<Text style={styles.nomedescricao}>Notas</Text>
							<Text style={styles.infodescricao}>{notas}</Text>
						</View>
					) : (
						false
					)}
				</View>
			</View>
		</View>
	);
};

export default Extracurricular;
