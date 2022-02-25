import { StyleSheet } from "react-native";
import Colors from "../../utils/styles/colors";
import { moderateScale, scale, verticalScale } from "../../utils/styles/responsive";

export default StyleSheet.create({
  backButtonContainer: {
    alignItems: "center",
    height: "20%",
    justifyContent: "center",
    marginVertical: 10,
    width: "20%",
  },
  backIcon: {
    height: scale(40),
    width: scale(40),
  },
  biometricButtonContainer: (isActive) => ({
    alignItems: 'center',
    backgroundColor: isActive ? Colors.BLUE_40 : Colors.BLUE_LIGHT_0,
    borderRadius: scale(8),
    height: moderateScale(61, 0.3),
    justifyContent: 'center',
    width: moderateScale(61, 0.3),
  }),
  biometricSectionContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  emailInput: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLUE_0,
    borderRadius: moderateScale(30),
    borderWidth: 1,
    color: Colors.GRAY_40,
    fontSize: moderateScale(15),
    height: moderateScale(56),
    marginBottom: verticalScale(30),
    paddingHorizontal: scale(20),
  },
  forgotPasswordButtonContainer: {
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  forgotPasswordButtonText: {
    color: Colors.CORAL_40,
    fontSize: moderateScale(15),
    letterSpacing: 0.6,
    textDecorationLine: "underline",
  },
  forgotPasswordText: {
    color: Colors.CORAL_0,
    fontSize: moderateScale(16, 0.3),
    letterSpacing: 0.6,
    lineHeight: verticalScale(18),
    textDecorationLine: "underline",
  },
  headerContainer: {
    height: "45%",
    justifyContent: "space-between",
  },
  inputsContainer: {
    marginHorizontal: verticalScale(20),
    marginTop: verticalScale(55),
  },
  label: {
    color: Colors.BLUE_DEEP_0,
    fontSize: moderateScale(16, 0.2),
    marginBottom: verticalScale(5),
    marginLeft: verticalScale(15),
  },
  loginButtonContainer: {
    alignItems: "center",
    backgroundColor: Colors.GREY_LIGHT,
    borderRadius: moderateScale(100),
    flexDirection: "row",
    height: moderateScale(61, 0.3),
    justifyContent: 'center',
    width: moderateScale(224),
  },
  loginButtonContainerActive: {
    alignItems: "center",
    backgroundColor: Colors.GREY,
    borderRadius: moderateScale(100),
    flexDirection: "row",
    height: moderateScale(55, 0.3),
    justifyContent: 'center',
    width: moderateScale(200),
  },
  loginButtonIcon: {
    height: scale(55),
    width: scale(55),
  },
  loginButtonIconContainer: {
    alignItems: "center",
    height: scale(50),
    justifyContent: "center",
    marginLeft: scale(10),
    width: scale(50),
  },
  loginButtonInteractive: {
    alignItems: "center",
    backgroundColor: Colors.GREY,
    borderRadius: moderateScale(100),
    flexDirection: "row",
    height: moderateScale(55, 0.3),
    justifyContent: 'center',
    width: moderateScale(200),
  },
  loginButtonSectionContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(60),
    paddingHorizontal: verticalScale(30),
  },
  loginButtonText: {
    color: Colors.GRAY_40,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  loginButtonTextActived: {
    color: Colors.WHITE,
    fontSize: moderateScale(16),
    letterSpacing: 1,
  },
  loginContentContainer: {
    flexGrow: 1,
  },
  loginElementsContainer: {
    height: "40%",
    justifyContent: "space-between",
    width: "100%",
  },
  loginViewContainer: {
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: scale(40),
    borderTopRightRadius: scale(40),
    borderWidth: 1,
    height: "60%",
    justifyContent: "center",
    overflow: "hidden",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: verticalScale(10),
    marginTop: verticalScale(100),
  },
  modalContainerSuccessStyle: {
    paddingBottom: verticalScale(20),
    paddingTop: verticalScale(30),
  },
  momentoSalvContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  momentoSalvText: {
    color: Colors.GRAY_0,
  },
  passwordInput: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLUE_0,
    borderRadius: moderateScale(30),
    borderWidth: 1,
    color: Colors.GRAY_40,
    fontSize: moderateScale(15),
    height: moderateScale(55),
    paddingHorizontal: scale(20),
    paddingRight: scale(50),
  },
  passwordInputIcon: {
    right: moderateScale(12),
  },
  rememberMeButtonContainer: {
    alignItems: "flex-start",
    marginBottom: verticalScale(30),
    marginTop: verticalScale(22),
  },
  rememberMeText: {
    color: Colors.GRAY_0,
    fontSize: moderateScale(16, 0.2),
    letterSpacing: 0.25,
  },
});
