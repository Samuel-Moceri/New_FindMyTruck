import { CHANGE_VALUE, LOGIN } from 'src/actions/users';

// set the initial state
export const initialState = {
    logged: false,
    email: '',
    password: '',
    token: ''
};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value
      }
    case LOGIN:
      // the new state will have the new values (action.value)
      return {
        ...state,
        logged: true,
        password: '',
        email: '',
        token: action.token
      }
    default:
      return state;
  }
};

export default reducer;
