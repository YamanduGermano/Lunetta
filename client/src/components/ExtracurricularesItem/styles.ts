import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
	nome: { fontFamily: theme.fonts.bold, fontSize: 17, flexGrow: 1 },
	header: {
		display: 'flex',
		flexDirection: 'row',
		alignContent: 'center',
		backgroundColor: 'white',
		padding: 15,
	},
	item: {
		elevation: 5,
		marginHorizontal: 5,
		borderRadius: 25,
		backgroundColor: '#003E77',
	},
	descricao: { padding: 15, paddingVertical: 20, position: 'relative' },
	nomedescricao: {
		fontFamily: theme.fonts.bold,
		fontSize: 17,
		flexGrow: 1,
		color: 'white',
		paddingVertical: 5,
	},
	infodescricao: {
		fontFamily: theme.fonts.regular,
		fontSize: 15,
		flexGrow: 1,
		color: 'white',
		paddingBottom: 5,
	},
});

export default styles;
