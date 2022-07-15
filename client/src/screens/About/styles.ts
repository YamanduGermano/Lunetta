import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const Styles = StyleSheet.create({
	mainview: { paddingHorizontal: 30, paddingTop: 10 },
	texto: {
		fontSize: 20,
		fontFamily: theme.fonts.light,
	},
	titulo: {
		fontSize: 20,
		fontFamily: theme.fonts.bold,
	},
});

export default Styles;
