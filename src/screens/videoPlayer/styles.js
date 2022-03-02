import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/styles/responsive'
import Colors from '../../utils/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyVideoContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  emptyVideoText: {
    color: Colors.GRAY_DARK,
    fontSize: moderateScale(16, 0.4),
    fontWeight: 'bold',
    lineHeight: verticalScale(20),
    textAlign: 'center',
  },
  safeAreaBottom: {
    backgroundColor: Colors.WHITE,
  },
  safeAreaHeader: {
    backgroundColor: Colors.GRAY,
  },
  videoPlayerContainer: {
    alignSelf: 'center',
    height: verticalScale(210),
    marginTop: verticalScale(20),
    width: scale(300),
  },
});
