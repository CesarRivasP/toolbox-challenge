import { SESSION_INFO, REMEMBER_USER, LOGOUT_USER } from './types';

function GlobalReducer(state, action) {
  switch (action.type) {
    case SESSION_INFO:
      return {
        ...state,
        isAutenticated: true,
        token: action.payload.token,
        authorizationType: action.payload.authorizationType,
      };
    case REMEMBER_USER:
      return {
        ...state,
        userRemember: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAutenticated: false,
        token: '',
        authorizationType: '',
      };
    default: {
      throw new Error('Error in GlobalReducer');
    }
  }
};

export default GlobalReducer;
