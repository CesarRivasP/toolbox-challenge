import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../utils/styles/responsive';
import Colors from '../../utils/styles/colors';

const styles = StyleSheet.create({
  container: (disabled, pressed) => ({
    alignItems: 'center',
    backgroundColor: disabled ? Colors.GREY : (pressed ? Colors.BACKDROP_COLOR : Colors.BLACK),
    borderRadius: 100,
    height: verticalScale(48),
    justifyContent: 'center',
  }),
  title: (titleBold, disabled) => ({
    color: disabled ? Colors.GRAY_40 : Colors.WHITE,
    fontSize: moderateScale(14, 0.2),
    letterSpacing: 1,
  }),
});

export default styles;
