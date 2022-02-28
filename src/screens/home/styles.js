import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/styles/responsive'
import Colors from '../../utils/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  safeAreaHeader: {
    backgroundColor: Colors.GRAY,
  },
  safeAreaBottom: {
    backgroundColor: Colors.WHITE,
  },
  carouselTitleContainer: {
    height: verticalScale(50),
    justifyContent: 'center',
    paddingLeft: scale(20),
    backgroundColor: Colors.GRAY,
  },
  thumbImage: {
    width: scale(220),
    height: scale(160),
  },
  posterImage: {
    width: scale(250),
    height: scale(370),
  },
  carouselTitleText: {
    lineHeight: verticalScale(22),
    fontSize: moderateScale(20, 0.3),
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  thumbCarouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbTitleText: {
    marginVertical: verticalScale(10),
    lineHeight: verticalScale(20),
    fontSize: moderateScale(16, 0.3),
    fontWeight: 'bold',
  },
  thumListContainer: {
    marginVertical: verticalScale(5),
  },
  posterListContainer: {
    marginBottom: verticalScale(10),
  },
  posterTitleText: {
    lineHeight: verticalScale(20),
    fontSize: moderateScale(18, 0.3),
    position: 'absolute',
    color: Colors.YELLOW,
    fontWeight: 'bold',
    bottom: verticalScale(15),
  },
  posterItemContainer: {
    paddingTop: verticalScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
