import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../utils/styles/responsive'
import Colors from '../../utils/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaBottom: {
    backgroundColor: Colors.WHITE,
  },
  safeAreaHeader: {
    backgroundColor: Colors.GRAY,
  },
  videoPlayerContainer: {
    alignSelf: 'center',
    height: verticalScale(220),
    marginTop: verticalScale(20),
    width: scale(320),
  },
});
