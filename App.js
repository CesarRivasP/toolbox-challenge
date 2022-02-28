import React, { useEffect, useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import AUTH from './src/auth/auth';
import reducer from './src/state/global/reducer';
import GlobalContext from './src/state/global/globalContext';
import initialState from './src/state/global/initialState';
import LoggedInScreens from './src/navigation/loggedIn';
import LoggedOutScreens from './src/navigation/loggedOut';
import InfoModal from './src/components/infoModal';
import useInfoModal from './src/hooks/useInfoModal';
import * as ActionTypes from './src/state/global/types';
import { GENERAL_MODAL_TITLE, SESSION_EXPIRED_MESSAGE } from './src/utils/constants/errorMessages';

const { Navigator, Screen } = createNativeStackNavigator();

enableScreens();

function App() {
  const [globalState, globalDispatch] = useReducer(reducer, initialState);
  const { infoModal, handleOpenModal, handleCloseModal } = useInfoModal({
    visible: false,
    title: null,
    description: null,
  });

  const handleCustomCloseModal = async () => {
    handleCloseModal();
    await AUTH.setLogoutSession(() => {
      globalDispatch({ type: ActionTypes.LOGOUT_USER });
      globalDispatch({ type: ActionTypes.SESSION_EXPIRED });
    });
  };

  useEffect(() => {
    if (globalState.sessionExpired === true) {
      handleOpenModal({
        visible: true,
        title: GENERAL_MODAL_TITLE,
        description: SESSION_EXPIRED_MESSAGE,
      });
    }
  }, [globalState.sessionExpired]);

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
        onClose={handleCustomCloseModal}
        visible={infoModal.visible}
        title={infoModal.title}
        description={infoModal.description}
      />
    </GlobalContext.Provider>
  );
};

export default App;
