import axios from 'axios';
import { FETCH_TRUCKS } from '../actions/trucks';

const api = axios.create({
  baseURL: 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public/api',
});

const ajax = (store) => (next) => (action) => {
    // on va vouloir envoyer l'email et le mot de passe à l'api pour s'authentifier
    // ils sont dans le state, donc je récupère le state puisque j'ai accès au store

    // on fait l'appel à l'api
    api.post('/login_check', {
      // email: state.user.email,
      // password: state.user.password,
      username: 'findmytruck2021@gmail.com',
      password: '123456',
      
    })

     .then(function (response) {
    console.log(response);
  })
};

export default ajax;
