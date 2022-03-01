import { StyleSheet } from "react-native";
import Colors from "../../utils/styles/colors";
import { moderateScale, scale, verticalScale } from "../../utils/styles/responsive";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  emailInput: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
    borderRadius: moderateScale(30),
    borderWidth: 1,
    color: Colors.GRAY_DARK,
    fontSize: moderateScale(15),
    height: moderateScale(56),
    marginBottom: verticalScale(30),
    paddingHorizontal: scale(20),
  },
  inputsContainer: {
    marginHorizontal: verticalScale(20),
    marginTop: verticalScale(20),
  },
  label: {
    color: Colors.GRAY_DARK,
    fontSize: moderateScale(16, 0.2),
    marginBottom: verticalScale(5),
    marginLeft: verticalScale(15),
  },
  loginButtonContainer: {
    alignItems: "center",
    borderRadius: moderateScale(100),
    flexDirection: "row",
    height: moderateScale(61, 0.3),
    justifyContent: 'center',
    width: moderateScale(224),
  },
  loginButtonSectionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(60),
    paddingHorizontal: verticalScale(30),
  },
  loginButtonText: {
    color: Colors.WHITE,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  loginContentContainer: {
    flexGrow: 1,
  },
  logo: {
    height: 250,
    width: 250,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  passwordInput: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
    borderRadius: moderateScale(30),
    borderWidth: 1,
    color: Colors.GRAY_DARK,
    fontSize: moderateScale(15),
    height: moderateScale(55),
    paddingHorizontal: scale(20),
    paddingRight: scale(50),
  },
  passwordInputIcon: {
    right: moderateScale(12),
  },
});
