import axios from 'axios';
import { TRY_LOGIN, login, } from '../actions/users';
import { SEND_MESSAGE } from '../actions/contact';

// set the baseURl
const api = axios.create({
  // baseURL: 'http://ec2-100-26-195-84.compute-1.amazonaws.com/api',
  baseURL: 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public/api',
});

const ajax = (store) => (next) => (action) => {

  switch(action.type) {
    // Define every params for the LOG_USER's case
    case TRY_LOGIN: 
      const state = store.getState();

      // API request that will add itself to the baseURL with username/pass params
      api.post('/login_check', {
        username: state.user.email,
        password: state.user.password,
      })

      // What we do if the request worked
      .then((response) => {
        // if the connection is successful, we save the token
        // https://github.com/axios/axios#custom-instance-defaults
        api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;

        console.log(response.data);
        localStorage.setItem(JSON.stringify(`${response.data.data.id}`),JSON.stringify(response.data.token))
      
        store.dispatch({
          type: LOGIN,
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
      // const state = store.getState();

      api.post('/v1/contact', {
        name: state.contact.name,
        email: state.contact.email,
        object: state.contact.object,
        message: state.contact.message,
      })

      // What we do if the request worked
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
