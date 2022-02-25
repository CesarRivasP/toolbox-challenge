import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/constants';
import { moderateScale, scale, verticalScale } from '../../utils/styles/responsive';
import Colors from '../../utils/styles/colors';

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: 0,
  },
  actionButton: {
    borderRadius: moderateScale(100),
    marginTop: verticalScale(16),
    minWidth: scale(180),
    paddingHorizontal: scale(30),
  },
  actionButtonContainer: {
    alignItems: 'center',
  },
  backdropView: {
    backgroundColor: Colors.BACKDROP_COLOR,
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  closeIcon: {
    height: verticalScale(30),
    tintColor: Colors.BLUE_0,
    width: verticalScale(30),
  },
  closeIconContainer: {
    alignItems: 'center',
    borderRadius: verticalScale(19),
    height: verticalScale(27),
    justifyContent: 'center',
    position: 'absolute',
    right: scale(16),
    top: verticalScale(12),
    width: verticalScale(27),
  },
  containerTextModal: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  contentContainer: {
    maxHeight: SCREEN_HEIGHT - verticalScale(200),
  },
  description: {
    color: Colors.GRAY_10,
    fontSize: moderateScale(17, 0.2),
    lineHeight: verticalScale(22),
    marginTop: verticalScale(15),
    textAlign: 'center',
  },
  dialog: {
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    marginBottom: verticalScale(5),
    paddingBottom: verticalScale(15),
    paddingHorizontal: scale(25),
    paddingTop: verticalScale(15),
    position: 'absolute',
    width: SCREEN_WIDTH - scale(75),
    height: SCREEN_HEIGHT * 0.20,
    borderWidth: 1,
  },
  dismissActionText: {
    color: Colors.CORAL_0,
    fontSize: moderateScale(16, 0.2),
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  title: {
    color: Colors.BLUE_DEEP_0,
    fontSize: moderateScale(25, 0.2),
    lineHeight: verticalScale(26),
    textAlign: 'center',
  }
});

export default styles;
