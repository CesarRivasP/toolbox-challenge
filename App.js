import React, { useEffect, useReducer, useRef } from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import reducer from './src/state/global/reducer';
import GlobalContext from './src/state/global/globalContext';
import initialState from './src/state/global/initialState';
import LoggedInScreens from './src/navigation/loggedIn';
import LoggedOutScreens from './src/navigation/loggedOut';
import InfoModal from './src/components/infoModal';
import useInfoModal from './src/hooks/useInfoModal';

const { Navigator, Screen } = createNativeStackNavigator();

enableScreens();

function App() {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);
  // const isDarkMode = useColorScheme() === 'dark';
  const { infoModal, handleOpenModal, handleCloseModal } = useInfoModal({
    visible: false,
    title: null,
    description: null,
  });
  const infoModalStatus = useRef(false);

  function handleCloseInfoModal() {
    infoModalStatus.current = false;
    handleCloseModal();
  };

  // useEffect(() => {
  //   if (globalState.isAutenticated === false && infoModalStatus?.current === true) return;
  //   if (globalState.isAutenticated === false && infoModalStatus?.current === false) {
  //     handleOpenModal({
  //       visible: true,
  //       title: 'Info',
  //       description: 'Your session has expired.',
  //     });
  //   }
  // }, [globalState.isAutenticated]);

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      <NavigationContainer testID='appNavigationContainer'>
        <Navigator>
          {globalState.isAutenticated ? (
            <Screen
              name='loggedIn'
              component={LoggedInScreens}
              options={{ headerShown: false }}
            />
          ) : (
            <Screen
              name='loggedOut'
              component={LoggedOutScreens}
              options={{ headerShown: false }}
            />
          )}
        </Navigator>
      </NavigationContainer>
      <InfoModal
        showCloseButton
        onClose={handleCloseInfoModal}
        visible={infoModal.visible}
        title={infoModal.title}
        description={infoModal.description}
      />
    </GlobalContext.Provider>
  );
};

export default App;
