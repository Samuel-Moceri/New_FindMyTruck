import Field from 'src/components/Forms/Field';

import { changeValue } from 'src/actions/users';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import './style.scss';

const LoginForm = () => {

  /**
   * We get the state values in several const
   */
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);
  const logged = useSelector(state => state.user.logged);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'TRY_LOGIN'
    })
  }

  /**
   * We get the desired values to dispatch them where we need 
   */
  const dispatch = useDispatch();
  const onFieldChange = (key, value) => {
    dispatch(
      changeValue(key, value)
    );
  }
  return (
    <>
      {logged && 
      <Redirect to="/" />
      }
      <form onSubmit={handleSubmit} className="settings-form">
        <Field
          name="email"
          value={email}
          type="email"
          placeholder="E-mail"
          onFieldChange={onFieldChange}
        />
        <Field
          name="password"
          value={password}
          type="password"
          placeholder="Mot de passe"
          onFieldChange={onFieldChange}
        />
        <button 
        type="submit"
        className="login-form-button"
        >
          Se connecter
        </button>
      </form>   
    </>
     
  );
};

export default LoginForm;
