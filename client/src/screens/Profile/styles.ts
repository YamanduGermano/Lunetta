import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';
import { theme } from '../../global/styles/theme';

const Styles = StyleSheet.create({
	nome: { fontFamily: theme.fonts.bold, fontSize: 24 },
	cidade: { fontFamily: theme.fonts.light, fontSize: 18 },
	textos: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		paddingLeft: 25,
	},
	picture: {
		backgroundColor: '#003E77',
		width: 100,
		height: 100,
		borderRadius: 1000,
	},
	maininfo: { display: 'flex', flexDirection: 'row' },
	mainview: { paddingHorizontal: 30 },
	detalhes: { fontFamily: theme.fonts.regular, fontSize: 17 },
	detalhesview: { paddingTop: 25 },
	descricaoview: { paddingVertical: 5, paddingHorizontal: 15 },
});

export default Styles;
