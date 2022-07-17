import { StyleSheet } from 'react-native';
import { theme } from '../global/styles/theme';

const Styles = StyleSheet.create({
	titulo: { fontSize: 40, fontFamily: theme.fonts.bold, marginBottom: 10 },
	texto: { fontSize: 20, fontFamily: theme.fonts.light, marginTop: 10 },
	info: { fontSize: 17, fontFamily: theme.fonts.light, color: '#7e7e7e' },
	dadosview: { marginTop: 50, marginBottom: 30 },
	dropdown: {
		// borderBottomWidth: 5,
		// borderBottomColor: '#003E77',
		padding: 5,
		backgroundColor: 'white',
		marginVertical: 10,
		elevation: 5,
		borderRadius: 1000,
	},
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
});

export default Styles;
