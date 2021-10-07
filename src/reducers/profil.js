import { TYPE_VALUES, UPDATE_INFORMATIONS } from 'src/actions/profil';

const data = JSON.parse(sessionStorage.getItem('key'));
const informations = data.data;


// set the initial state
export const initialState = {
    nicknameProfil: informations.nickname,
    emailProfil: informations.email,
    firstnameProfil: informations.firstname,
    lastnameProfil: informations.lastname,
    addressProfil: informations.address,
    cityProfil: informations.city,
    postCodeProfil: informations.postCode,
    warning:false,
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
      nicknameProfil: informations.nickname,
      emailProfil: informations.email,
      firstnameProfil: informations.firstname,
      lastnameProfil: informations.lastname,
      addressProfil: informations.address,
      cityProfil: informations.city,
      postCodeProfil: informations.postCode,
      warning:true,
      }
    default:
      return state;
  }
};

export default reducer;
