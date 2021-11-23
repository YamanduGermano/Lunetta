import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: 140,
    marginHorizontal: 10,
    marginBottom: 14,
  },
  button: {
    height: 140,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontFamily: theme.fonts.regular,
    fontSize: 20,
    textAlign: 'center',
  },
})

export default styles;