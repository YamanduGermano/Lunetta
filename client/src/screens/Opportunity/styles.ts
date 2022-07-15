import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

const styles = StyleSheet.create({
  oppImg: {
    width: 100,
    height: 100,
    borderRadius: 1000,
    transform: [
      {
        translateY: -50
      }
    ]
  },
  oppName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  oppType: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '100',
  }
})

export default styles;