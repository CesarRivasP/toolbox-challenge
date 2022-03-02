import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/styles/responsive'
import Colors from '../../utils/styles/colors';

export default StyleSheet.create({
  carouselTitleContainer: {
    backgroundColor: Colors.GRAY,
    height: verticalScale(50),
    justifyContent: 'center',
    paddingLeft: scale(20),
  },
  carouselTitleText: {
    color: Colors.WHITE,
    fontSize: moderateScale(20, 0.3),
    fontWeight: 'bold',
    lineHeight: verticalScale(22),
  },
  container: {
    flex: 1,
  },
  posterImage: {
    height: scale(350),
    width: scale(240),
  },
  posterItemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScale(5),
  },
  posterListContainer: {
    marginBottom: verticalScale(10),
  },
  posterTitleText: {
    bottom: verticalScale(15),
    color: Colors.YELLOW,
    fontSize: moderateScale(18, 0.3),
    fontWeight: 'bold',
    lineHeight: verticalScale(20),
    position: 'absolute',
  },
  safeAreaBottom: {
    backgroundColor: Colors.WHITE,
  },
  safeAreaHeader: {
    backgroundColor: Colors.GRAY,
  },
  thumListContainer: {
    marginVertical: verticalScale(5),
  },
  thumbCarouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbImage: {
    height: scale(160),
    width: scale(220),
  },
  thumbTitleText: {
    fontSize: moderateScale(16, 0.3),
    fontWeight: 'bold',
    lineHeight: verticalScale(20),
    marginVertical: verticalScale(10),
  },
});
