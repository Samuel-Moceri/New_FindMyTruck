import axios from 'axios';
import { TRY_LOGIN, LOGIN } from '../actions/users';
import { SEND_MESSAGE } from '../actions/contact';
import { REGISTER } from '../actions/register';
import { FETCH_FOODTRUCK } from '../actions/foodtruck';

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
        api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;

        console.log(response.data);
        localStorage.setItem(JSON.stringify(`${response.data.data.id}`),JSON.stringify(response.data))
      
        store.dispatch({
          type: LOGIN,
          nickname: response.data.data.nickname,
          token: response.data.token,
        })
      })

      .catch((error) => {
        console.error(error);

        alert('Authentification échouée');
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
        console.log(response);
      })

      next(action);
    break;

    case FETCH_FOODTRUCK :
      // const stateFoodtruck = store.getState();

      api.get('/api/v1/search?lat=46.73591400&lon=0.83311200&km=10')

      .then((response)=> {
        console.log(response);
        store.dispatch({
          type: 'SAVE_FOODTRUCKLIST',
          foodtruck: response.data,
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
  }
 
};

export default ajax;
