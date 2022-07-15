import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const Styles = StyleSheet.create({
	mainview: {
		width: '100%',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	titulo: { fontSize: 40, fontFamily: theme.fonts.bold },
	subtitulo: { fontSize: 25, fontFamily: theme.fonts.light },
	dadosview: { marginTop: 50, marginBottom: 30 },
	input: {
		fontSize: 17,
		borderBottomWidth: 2,
		borderBottomColor: '#003E77',
		padding: 5,
		backgroundColor: 'white',
		marginVertical: 10,
	},
	enviar: {
		backgroundColor: '#003E77',
		color: 'white',
		fontSize: 17,
		fontFamily: theme.fonts.regular,
		padding: 10,
		textAlign: 'center',
		marginHorizontal: 40,
		borderRadius: 100,
	},
	opcoes: {
		fontSize: 17,
		fontFamily: theme.fonts.light,
		paddingTop: 20,
		textAlign: 'center',
	},
	opcoesview: { marginTop: 15 },
});

export default Styles;
