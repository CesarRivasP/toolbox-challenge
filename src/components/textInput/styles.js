import { StyleSheet } from "react-native";
import Colors from "../../utils/styles/Colors";
import { moderateScale, verticalScale, scale } from "../../utils/styles/responsive";

const styles = StyleSheet.create({
  container: {},
  error: {
    color: Colors.RED,
    fontSize: moderateScale(12, 0.2),
    marginLeft: scale(16),
    marginTop: 3,
  },
  input: {
    backgroundColor: Colors.GREY,
    borderRadius: 10,
    color: Colors.WHITE,
    height: verticalScale(56),
    paddingLeft: scale(16),
  },
  label: {
    color: Colors.WHITE,
    fontSize: moderateScale(14, 0.2),
    lineHeight: moderateScale(20, 0.2),
    marginBottom: verticalScale(8),
  },
});

export default styles;
