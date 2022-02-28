import { SESSION_INFO, LOGOUT_USER, SESSION_EXPIRED } from './types';

function GlobalReducer(state, action) {
  switch (action.type) {
    case SESSION_INFO:
      return {
        ...state,
        isAutenticated: true,
        token: action.payload.token,
        authorizationType: action.payload.authorizationType,
      };
    case SESSION_EXPIRED:
      return {
        ...state,
        sessionExpired: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAutenticated: false,
        token: '',
        authorizationType: '',
        sessionExpired: false,
      };
    default: {
      throw new Error('Error in GlobalReducer');
    }
  }
};

export default GlobalReducer;
