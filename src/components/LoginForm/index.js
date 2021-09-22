/*
  Objectif : gérer une authentification -> une connexion
  x il faut gérer des champs controlés pour l'email et le mdp pour avoir les infos dans le state
  x à la soumission du form on va traduire l'intention de se connecter dans un middleware
    x poser un écouteur au submit
    x passer la foncion capable de dispatcher via les props
      pour garder les branchements hors de LoginForm
    x dispatcher une action au submit
    x créer le middleware
    x le donner au store
    x traduire l'action dans le middleware cf étape suivante
  x dans le middleware on va faire l'appel à l'api pour envoyer le couple email/mdp
  x en fonction de la réponse de l'api on passera une info du state
    à true pour dire qu'on est connecté
  - on va brancher nos composants en lecture via le hook de react-redux useSelector
    pour récupérer l'info du state et la représenter
*/

import {useSelector, useDispatch} from 'react-redux';
import './style.scss';
import Field from 'src/components/Forms/Field';
import { changeValue } from 'src/actions/users';

const LoginForm = () => {

  /**
   * On récupère les valeurs souhaitées dans le state
   */
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'TRY_LOGIN'
    })
  }

  const dispatch = useDispatch();
  const onFieldChange = (key, value) => {
    dispatch(changeValue(key, value));
  }

  return (
    <form onSubmit={handleSubmit} className="settings-form">
      <Field
        name="email"
        value={email}
        type="email"
        placeholder="Email"
        onFieldChange={onFieldChange}
      />
      <Field
        name="password"
        value={password}
        type="password"
        placeholder="Mot de passe"
        onFieldChange={onFieldChange}
      />
      <button>Se connecter</button>
    </form>   
  );
};

export default LoginForm;
