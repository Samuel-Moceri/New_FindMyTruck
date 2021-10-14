import axios from 'axios';
import { TRY_LOGIN, LOGIN } from '../actions/users';
import { SEND_MESSAGE } from '../actions/contact';
import { REGISTER } from '../actions/register';
import { FETCH_FOODTRUCK } from '../actions/foodtruck';
import { UPDATE_INFORMATIONS } from '../actions/profil';

// set the baseURl
const api = axios.create({
  // baseURL: 'http://ec2-100-26-195-84.compute-1.amazonaws.com/api',
  baseURL: 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public',

});

const ajax = (store) => (next) => (action) => {

  switch(action.type) {
    // Define every params for the LOG_USER's case
    case TRY_LOGIN: 
      const state = store.getState();

      // API request that will add itself to the baseURL with username/pass params
      api.post('/api/login_check', {
        username: state.user.email,
        password: state.user.password,
      })

      // What we do if the request worked
      .then((response) => {
        // if the connection is successful, we save the token
        // https://github.com/axios/axios#custom-instance-defaults
        
        sessionStorage.setItem('key',JSON.stringify(response.data))
        api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;

        store.dispatch({
          type: LOGIN,
          nickname: response.data.data.nickname,
          token: response.data.token,
          roles: response.data.data.roles,
        })
      })

      .catch((error) => {
        console.error(error);

        alert('Authentification échouée');
      });

      next(action);
    break;

    case 'SEND_EMAIL' : 
      const stateEmailLost = store.getState();

      // API request that will add itself to the baseURL with username/pass params
      api.post('/api/forgot', {
        emaillost: stateEmailLost.user.email,
      })

      // What we do if the request worked
      .then((response) => {
        // if the connection is successful, we save the token
        // https://github.com/axios/axios#custom-instance-defaults
      })

      .catch((error) => {
        console.error(error);

        alert('E-mail non-envoyé');
      });

      next(action);
    break;

    case SEND_MESSAGE:
      const stateContact = store.getState();

      api.post('/api/v1/contact', {
        nom: stateContact.contact.nameContact,
        email: stateContact.contact.emailContact,
        objet: stateContact.contact.objectContact,
        message: stateContact.contact.messageContact,
      })

      // What we do if the request worked
      .then((response) => {

      })

      next(action);
    break;

    case 'FETCH_FOODTRUCK_ON_LOAD' :
      const stateFoodtruckOnLoad = store.getState();

      api.get(`/api/v1/search?lat=${stateFoodtruckOnLoad.user.lat}&lon=${stateFoodtruckOnLoad.user.lon}&km=20`)

      .then((response)=> {

        if(!response.data.length) {
          console.log();('Aucun foodtruck');
          return;
        }

        store.dispatch({
          type: 'SAVE_FOODTRUCKLIST',
          foodtruck: response.data,
        })
      })
    break;

    case FETCH_FOODTRUCK :
      // const stateFoodtruck = store.getState();
        
      const stateFoodtruck = store.getState();
      const address = stateFoodtruck.user.address;

      axios.get(`https://api-adresse.data.gouv.fr/search/?q=${address}`)
      .then((response)=> {

        if(!response.data.features.length) {
          console.log(response);
          console.log();('Votre addresse ne correspond à aucune connue.');
          return;
        }
        console.log(response);
        const lon = response.data.features[0].geometry.coordinates[0];
        const lat = response.data.features[0].geometry.coordinates[1];

        api.get(`/api/v1/search?lat=${lat}&lon=${lon}&km=10`)

        .then((response)=> {
          if(!response.data.length) {
            console.log();('Aucun foodtruck');
            return;
          }

          console.log(response);
          store.dispatch({
            type: 'SAVE_FOODTRUCKLIST',
            foodtruck: response.data,
            search: true,
          })
        })
      })
      next(action);
      break;

    case REGISTER:
      const stateRegister = store.getState();

      api.post('/register', {
        nickname: stateRegister.register.nameRegister,
        email: stateRegister.register.emailRegister,
        plainPassword: stateRegister.register.passwordRegister,
        roles: stateRegister.register.role,
      })

    .then((response) => {
      console.log(response);
    })
    
    next(action);
    default:
      next(action);
    break;

  case UPDATE_INFORMATIONS:
      const stateProfil = store.getState();
      const data = JSON.parse(sessionStorage.getItem('key'));
      const id = data.data.id;;
      console.log(id);

      api.patch(`api/v1/users/${id}`, {
        nickname: stateProfil.profil.nicknameProfil,
        email: stateProfil.profil.emailProfil,
        firstname: stateProfil.profil.firstnameProfil,
        lastname: stateProfil.profil.lastnameProfil,
        street: stateProfil.profil.streetProfil,
        city: stateProfil.profil.cityProfil,
        postal_code: stateProfil.profil.postalCodeProfil,
        name: stateProfil.profil.nameFtProfil,
        phone: stateProfil.profil.phoneProfil,
        description: stateProfil.profil.descriptionProfil,
        planning: stateProfil.profil.planningProfil,
        payment: stateProfil.profil.paymentProfil,
        proaddress: stateProfil.profil.proaddressProfil,
        siret: stateProfil.profil.siretProfil,
        id: stateProfil.profil.idFt
      })

    .then((response) => {
      console.log(response);
    })
    
      next(action);
    break;

  case 'GET_USER_INFOS' :
    // const stateProfilInformation = store.getState();
    const dataInformations = JSON.parse(sessionStorage.getItem('key'));
    const idInformations = dataInformations.data.id;
    api.get(`api/v1/users/${idInformations}`)

    .then((response) => {
      console.log('user', response);
      store.dispatch({
        type: 'SAVE_USER_INFOS',
        userData: response.data
      })
    })
  
    next(action);
  break;
  }
 
};

export default ajax;
