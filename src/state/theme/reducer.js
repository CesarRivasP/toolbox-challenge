function ThemeReducer(state, action) {
  switch (action.type) {
    case 'DARK_THEME':
      return {
        ...state,
      };
    case 'LIGHT_THEME':
      return {
        ...state,
      };
    default: {
      throw new Error();
    }
  }
};

export default ThemeReducer;
