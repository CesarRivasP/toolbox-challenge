import { StyleSheet } from 'react-native';
import Colors from './colors';
import { verticalScale } from './responsive';

const GlobalStyles = StyleSheet.create({
  centeredRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexFill: {
    flex: 1,
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  safeAreaGlobal: (complete, isHeader = null, route = null, paddingBottom) => ({
    ...(complete ? {
      flex: 1,
      backgroundColor: Colors.GREY,
      paddingBottom
    } : {
      flex: isHeader ? 0 : 1,
      ...( route === "chatbot" || route === "cards" && {
        backgroundColor: isHeader ? Colors.WHITE : Colors.GREY,
        paddingBottom
      }),
      ...( route === "accounts" && {
        backgroundColor: isHeader ? Colors.GREEN : Colors.GREY,
        paddingBottom
      }),
    })
  }),
  titleContainer: {
    height: verticalScale(50),
    justifyContent: 'flex-end'
  },
});

export default GlobalStyles;
