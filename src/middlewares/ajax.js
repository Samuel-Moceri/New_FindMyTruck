import axios from 'axios';
import { LOG_USER } from '../actions/users';
// set the baseURl
const api = axios.create({
  baseURL: 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public/api',
});

const ajax = (store) => (next) => (action) => {

  switch(action.type) {
    // Define every params for the LOG_USER's case
    case LOG_USER: 
    // API request that will add itself to the baseURL with username/pass params
      api.post('/login_check', {
        username: 'findmytruck2021@gmail.com',
        password: '123456',
        
      })
      // What we do if the request worked
      .then(function (response) {
        console.log(response);
      })

      next(action);

    default:
      next(action);
      break;
  }
 
};

export default ajax;
