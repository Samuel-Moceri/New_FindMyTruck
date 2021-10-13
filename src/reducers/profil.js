import { TYPE_VALUES, UPDATE_INFORMATIONS, SHOW_MODIFY_INFORMATIONS, HIDE_MODIFY_INFORMATIONS } from 'src/actions/profil';

// const data = JSON.parse(sessionStorage.getItem('key'));
// const informations = data.data;
// const informationsFoodtruck = informations.user_foodtruck;


// set the initial state

export const initialState = {
  nicknameProfil: '',
  emailProfil: '',
  firstnameProfil: '',
  lastnameProfil: '',
  streetProfil: '',
  cityProfil: '',
  postalCodeProfil: '',
  nameFtProfil: '',
  phoneProfil: '',
  descriptionProfil: '',
  planningProfil: '',
  paymentProfil: '',
  proaddressProfil: '',
  menuProfil: '',
  pictureProfil: '',
  roles:'',
  warning:false,
  modify:false,
  reload: false,
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
      // nicknameProfil: '',
      emailProfil: '',
      firstnameProfil: '',
      lastnameProfil: '',
      streetProfil: '',
      cityProfil: '',
      postalCodeProfil: '',
      nameFtProfil: '',
      phoneProfil: '',
      descriptionProfil: '',
      planningProfil: '',
      paymentProfil: '',
      proaddressProfil: '',
      roles: '',
      siret:'',
      warning:true,
      modify: false,
      reload: true,
      }

    case SHOW_MODIFY_INFORMATIONS:
      // the new state will have the new values (action.value)
      return {
        ...state,
        modify: true,
      }

    case HIDE_MODIFY_INFORMATIONS:
    // the new state will have the new values (action.value)
    return {
      ...state,
      modify: false,
    }

    case 'SAVE_USER_INFOS': 
    // console.log(action.userData);

      state = {
        ...state,
        nicknameProfil: action.userData.nickname,
        emailProfil: action.userData.email,
        firstnameProfil: action.userData.firstname ? action.userData.firstname : '',
        lastnameProfil: action.userData.lastname ? action.userData.lastname  : '',
        roles: action.userData.roles,
      }

      if(action.userData.foodtruck) {
        // console.log(action.userData.foodtruck);
      
        state = {
          ...state, 
          streetProfil: action.userData.foodtruck.street ? action.userData.foodtruck.street : '',
          cityProfil: action.userData.foodtruck.city ? action.userData.foodtruck.city : '',
          postalCodeProfil: action.userData.foodtruck.postal_code ? action.userData.foodtruck.postal_code : '',
          nameFtProfil:action.userData.foodtruck.name ? action.userData.foodtruck.name : '',
          phoneProfil: action.userData.foodtruck.phone ? action.userData.foodtruck.phone : '',
          descriptionProfil: action.userData.foodtruck.description ? action.userData.foodtruck.description : '',
          planningProfil: action.userData.foodtruck.planning ? action.userData.foodtruck.planning : '',
          paymentProfil: action.userData.foodtruck.payment ? action.userData.foodtruck.payment : '',
          proaddressProfil: action.userData.proaddress ? action.userData.proaddress : '',
          menuProfil: action.userData.foodtruck.menu ? action.userData.foodtruck.menu : '',
          pictureProfil: action.userData.foodtruck.picture ? action.userData.foodtruck.picture : '',
          siretProfil: action.userData.siret ? action.userData.siret: '',
        };
      }

      return state;
      break;
    default:
      return state;
    }
};

export default reducer;
