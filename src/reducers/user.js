import { CHANGE_VALUE } from 'src/actions/users';

// set the initial state
export const initialState = {
    logged: false,
    email: '',
    password: ''
};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value
      }
    case 'TRY_LOGIN':
      // requete axios pour essayer de co l'user

      return {
        ...state,
        password: '',
        email: '',
        logged: true
      }
    default:
      return state;
  }
};

export default reducer;
