import Field from 'src/components/Forms/Field';

import { changeValueRegister } from 'src/actions/register';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';


import './style.scss';

const RegisterForm = () => {

  /**
   * We get the state values in several const
   */
  const registered = useSelector(state => state.register.registered);
  const nameRegister = useSelector(state => state.register.nameRegister);
  const emailRegister = useSelector(state => state.register.emailRegister);
  const passwordRegister = useSelector(state => state.register.passwordRegister);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'REGISTER'
    })
  }

  /**
   * We get the desired values to dispatch them where we need 
   */
  const dispatch = useDispatch();
  const onFieldChange = (key, value) => {
    dispatch(
      changeValueRegister(key, value)
    );
  }
  return (
    <>
      {!registered && 
      <form onSubmit={handleSubmit} className="settings-form">
        <Field
          name="nameRegister"
          value={nameRegister}
          type="name"
          placeholder="Nom d'utilisateur"
          onFieldChange={onFieldChange}
        />
        <Field
          name="emailRegister"
          value={emailRegister}
          type="email"
          placeholder="E-mail"
          onFieldChange={onFieldChange}
        />
        <Field
          name="passwordRegister"
          value={passwordRegister}
          type="password"
          placeholder="Mot de passe"
          onFieldChange={onFieldChange}
        />
        <button 
        type="submit"
        className="login-form-button"
        >
          S'inscrire
        </button>
      </form>   
      }

      {registered &&
      <>
        <h1> Vous pouvez dorénavant vous connecter à votre compte.</h1>
        <NavLink 
        to="/connexion"
        exact
        >
        <li  className="">CONNECTONS NOUS ENSEMBLE TEL DES NAVII</li>        
        </NavLink>
       </> 
        
      }
    </>
     
  );
};

export default RegisterForm;
