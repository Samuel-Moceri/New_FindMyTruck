import { CHANGE_VALUE_Profil, Profil } from 'src/actions/profil';

// set the initial state
export const initialState = {
    nameProfil: '',
    emailProfil: '',
    passwordProfil: '',
    verifPasswordProfil: '',

};

// define the reducer's properties/params
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE_PROFIL:
      return {
        ...state,
        [action.key]: action.value
      }
    case PROFIL:
      // the new state will have the new values (action.value)
      return {
        ...state,
        nameProfil: '',
        emailProfil: '',
        passwordProfil: '',
        verifPasswordProfil: '',

      }
    default:
      return state;
  }
};

export default reducer;
