import { StyleSheet } from 'react-native';
import { scale, verticalScale, moderateScale } from '../../utils/styles/responsive'
import Colors from '../../utils/styles/colors';

export default StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    height: verticalScale(90),
    paddingHorizontal: verticalScale(20),
    width: '90%',
  },
  characterDescription: {
    fontSize: moderateScale(15, 0.4),
    lineHeight: verticalScale(24),
  },
  characterDescriptionContainer: {
    height: verticalScale(75),
    maxWidth: scale(200),
    paddingLeft: scale(10),
  },
  characterImage: {
    borderRadius: 5,
    height: scale(75),
    width: scale(75),
  },
  characterTitle: {
    fontSize: moderateScale(16, 0.4),
    lineHeight: verticalScale(24),
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: Colors.GREY_LIGHT,
    height: verticalScale(100),
    justifyContent: 'center',
    width: '100%',
  }
});
