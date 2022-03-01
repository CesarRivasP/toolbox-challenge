/* eslint-disable react/prop-types */
import * as React from 'react';
import GlobalContext from '../src/state/global/globalContext';

function MountComponentWrapper({
  children,
  globalState,
  globalDispatch,
}){
  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default MountComponentWrapper;
