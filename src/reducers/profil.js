import { bindActionCreators } from 'redux';
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
  streetFoodtruck: '',
  cityFoodtruck: '',
  postalCodeFoodtruck: '',
  nameFoodtruck: '',
  phoneFoodtruck: '',
  descriptionFoodtruck: '',
  planningFoodtruck: '',
  paymentFoodtruck: '',
  proaddressFoodtruck: '',
  menuFoodtruck: '',
  pictureFoodtruck: '',
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
      emailProfil: '',
      firstnameProfil: '',
      lastnameProfil: '',
      streetFoodtruck: '',
      cityFoodtruck: '',
      postalCodeFoodtruck: '',
      nameFoodtruck: '',
      phoneFoodtruck: '',
      descriptionFoodtruck: '',
      planningFoodtruck: '',
      paymentFoodtruck: '',
      proaddressFoodtruck: '',
      roles: '',
      siretFoodtruck: '',
      warning:true,
      modify: false,
      reload: true,
      menuFoodtruck: '',
      pictureFoodtruck:'',
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
  

      state = {
        ...state,
        nicknameProfil: action.userData.nickname,
        emailProfil: action.userData.email,
        firstnameProfil: action.userData.firstname ? action.userData.firstname : '',
        lastnameProfil: action.userData.lastname ? action.userData.lastname  : '',
        roles: action.userData.roles,
      }

      if(action.userData.foodtruck) {
     
      
        state = {
          ...state, 
          streetFoodtruck: action.userData.foodtruck.street ? action.userData.foodtruck.street : '',
          cityFoodtruck: action.userData.foodtruck.city ? action.userData.foodtruck.city : '',
          postalCodeFoodtruck: action.userData.foodtruck.postal_code ? action.userData.foodtruck.postal_code : '',
          nameFoodtruck:action.userData.foodtruck.name ? action.userData.foodtruck.name : '',
          phoneFoodtruck: action.userData.foodtruck.phone ? action.userData.foodtruck.phone : '',
          descriptionFoodtruck: action.userData.foodtruck.description ? action.userData.foodtruck.description : '',
          planningFoodtruck: action.userData.foodtruck.planning ? action.userData.foodtruck.planning : '',
          paymentFoodtruck: action.userData.foodtruck.payment ? action.userData.foodtruck.payment : '',
          proaddressFoodtruck: action.userData.proaddress ? action.userData.proaddress : '',
          menuFoodtruck: action.userData.foodtruck.menu ? action.userData.foodtruck.menu : '',
          pictureFoodtruck: action.userData.foodtruck.picture ? action.userData.foodtruck.picture : '',
          siretFoodtruck: action.userData.siret ? action.userData.siret: '',
        };
      }

      return state;
      break;
    default:
      return state;
    }
};

export default reducer;
