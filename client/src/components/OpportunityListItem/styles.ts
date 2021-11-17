import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10000,
    width: 80,
    height: 80,
    marginRight: 12,
  },
  card: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
    paddingLeft: 9,
    paddingRight: 14,
    minHeight: 76,
    alignItems: 'center',
  },
  oppInfo: {},
  oppName: {
    fontFamily: theme.fonts.bold,
    fontSize: 24,
    color: theme.colors.text,
  },
  oppDetail: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    fontFamily: theme.fonts.regular,
  },
  arrow: {},
})

export default styles;