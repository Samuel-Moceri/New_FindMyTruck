import { TYPE_VALUES, UPDATE_INFORMATIONS } from 'src/actions/profil';

// set the initial state
export const initialState = {
    nicknameProfil: '',
    emailProfil: '',
    firstnameProfil: '',
    lastnameProfil: '',
    addressProfil: '',
    cityProfil: '',
    postCodeProfil: '',
};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TYPE_VALUES:
      return {
        ...state,
        [action.key]: action.value
      }
    case UPDATE_INFORMATIONS:
      // the new state will have the new values (action.value)
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default reducer;
