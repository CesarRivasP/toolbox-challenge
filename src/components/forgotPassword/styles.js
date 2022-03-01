import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/styles/responsive';
import Colors from '../../utils/styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.GREY,
    flexGrow: 1,
    height: '100%',
  },
  label: {
    color: Colors.BLUE_DEEP_0,
    fontSize: moderateScale(16, 0.2),
    marginBottom: 8,
    paddingLeft: scale(16),
  },
  modalContainerStyle: {
    paddingBottom: verticalScale(0),
    paddingTop: verticalScale(30),
  },
  passwordInputIcon: {
    right: moderateScale(12),
  },
  textBoxContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    position: 'relative',
  },
  touchableButton: {
    alignItems: 'center',
    height: verticalScale(30),
    justifyContent: 'center',
    position: 'absolute',
    right: scale(5),
    width: verticalScale(30),
  },
});
