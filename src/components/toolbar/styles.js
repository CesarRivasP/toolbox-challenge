import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from '../../utils/styles/responsive';
import Colors from '../../utils/styles/colors';

const styles = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: verticalScale(40),
    justifyContent: 'center',
    width: verticalScale(35),
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#8F8F8F',
    flexDirection: 'row',
    height: verticalScale(50),
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    width: '100%',
  },
  icon: {
    height: verticalScale(36),
    tintColor: Colors.BLUE_0,
    width: verticalScale(36),
  },
  title: {
    alignItems: 'center',
    bottom: 0,
    color: Colors.WHITE,
    display: 'flex',
    fontSize: moderateScale(22, 0.3),
    fontWeight: 'bold',
    justifyContent: 'center',
    left: 0,
    lineHeight: verticalScale(40),
    paddingTop: verticalScale(5),
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: 0,
    zIndex: -1,
  },
});
export default styles;
