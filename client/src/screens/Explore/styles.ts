import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  fycontainer: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    borderRadius: 30,
    height: 100,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  fytext: {
    color: 'white',
    fontFamily: theme.fonts.bold,
    fontSize: 30,
  }
})

export default styles;