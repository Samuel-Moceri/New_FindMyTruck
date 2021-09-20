export const initialState = {
  logged: true,
  password: '123456',
  username: 'findmytruck2021@gmail.com',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.value,
      };
    case 'SAVE_USER':
      return {
        ...state,
        logged: true,
        password: '',
        username: '',
      };
    case 'LOGOUT':
      return {
        ...state,
        logged: false,
        username: '',
      };
    default:
      return state;
  }
};

export default reducer;
