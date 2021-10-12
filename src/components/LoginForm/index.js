import Field from 'src/components/Forms/Field';

import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { changeValue } from 'src/actions/users';

import './style.scss';

const LoginForm = () => {

  /**
   * We get the state values in several const
   */
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);
  const logged = useSelector(state => state.user.logged);
  const registered = useSelector(state => state.register.registered);


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
      <form autoComplete="off" className="login_form_element" onSubmit={handleSubmit}>
        <div className="login_form_title">Connexion</div>
        <Field
          form="login"
          name="email"
          value={email}
          type="email"
          placeholder="E-mail"
          // className="login_form_email_text"
          onFieldChange={onFieldChange}
          required='required'
        />

        <Field
          form="login"
          name="password"
          value={password}
          type="password"
          placeholder="Mot de passe"
          onFieldChange={onFieldChange}
          required='required'
        />
        <div className="login_form_forget"> <a href="">Mot de passe oublié ?</a> </div>

        <button 
        type="submit"
        className="login_form_button"
        >
          Se connecter
        </button>
        {!registered &&
        <>
          <NavLink 
        to="/inscription"
        exact
        >
          <div className="login_form_joinus"> Rejoins nous ! </div>
        </NavLink>
        
        </>
        }
      </form>   
    </>
     
  );
};

export default LoginForm;
