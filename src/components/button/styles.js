import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../../utils/styles/responsive';
import Colors from '../../utils/styles/colors';

const styles = StyleSheet.create({
  container: (disabled, pressed) => ({
    alignItems: 'center',
    backgroundColor: disabled ? Colors.GRAY : (pressed ? Colors.RED_DARK : Colors.RED),
    borderRadius: 100,
    height: verticalScale(48),
    justifyContent: 'center',
  }),
  title: (disabled) => ({
    color: disabled ? Colors.GRAY_LIGHT : Colors.WHITE,
    fontSize: moderateScale(14, 0.2),
    fontWeight: 'bold',
    letterSpacing: 1,
  }),
});

export default styles;
