import { useContext } from 'react';
import GlobalContext from '../state/global/globalContext';

function useGlobalContext() {
  return useContext(GlobalContext);
}

export default useGlobalContext;
