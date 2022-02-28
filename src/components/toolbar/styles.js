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
    flexDirection: 'row',
    height: verticalScale(50),
    justifyContent: 'space-between',
    paddingHorizontal: scale(10),
    width: '100%',
    backgroundColor: '#8F8F8F',
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
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: 0,
    zIndex: -1,
    paddingTop: verticalScale(5),
    lineHeight: verticalScale(40),
    fontSize: moderateScale(22, 0.3),
  },
});
export default styles;
