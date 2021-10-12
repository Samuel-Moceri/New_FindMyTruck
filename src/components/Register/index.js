import Field from 'src/components/Forms/Field';
import FieldSwitch from 'src/components/Forms/Field/switch';

import { changeValueRegister } from 'src/actions/register';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';

import './style.scss';

const RegisterForm = () => {

  /**
   * We get the state values in several const
   */
  const registered = useSelector(state => state.register.registered);
  const nameRegister = useSelector(state => state.register.nameRegister);
  const emailRegister = useSelector(state => state.register.emailRegister);
  const passwordRegister = useSelector(state => state.register.passwordRegister);
  // const checked = useSelector(state => state.register.checked);

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

  const onFieldSwitchChange = (key, value) => {
    dispatch(
      changeValueRegister(key, value)
    );
  }
  return (
    <>
      {!registered && 

        <form autoComplete="off" className="register_form_element" onSubmit={handleSubmit}>
        <div className="register_form_title">Inscription</div>
        {/* //TODO erreur - Found 2 elements with non-unique id #field-role */}
        <div className="register_form_switch">
          <FieldSwitch 
            form="register"
            name="role"
            value= '1'
            type="radio"
            placeholder='Professionnel'
            onFieldSwitchChange={onFieldSwitchChange}
          />
          <FieldSwitch
            form="register"
            name="role"
            value= '0'
            type="radio"
            placeholder='Utilisateur'
            onFieldSwitchChange={onFieldSwitchChange}
          />
        </div>

        <Field
          form="register"
          name="nameRegister"
          value={nameRegister}
          type="name"
          placeholder="Nom d'utilisateur"
          onFieldChange={onFieldChange}
        />
        <Field
          form="register"
          name="emailRegister"
          value={emailRegister}
          type="email"
          placeholder="E-mail"
          onFieldChange={onFieldChange}
        />
        <Field
          form="register"
          name="passwordRegister"
          value={passwordRegister}
          type="password"
          placeholder="Mot de passe"
          onFieldChange={onFieldChange}
        />


      {/* <Field
        <label>
          <span>Switch with default style</span>
          <Switch onChange={onFieldChange} checked={checked} />
        </label>
      /> */}

      {/* // Professionnel <input type="checkbox" value='1'/> */}
        <button 
        type="submit"
        className="register_form_button"
        >
          S'inscrire
        </button>

      <NavLink 
      to="/connexion"
      exact
      > 
      {/* //TODO css a refaire sur le bouton */}
        <div className="login_form_member_register">Déjà inscrit ?</div>
      </NavLink>
          

      </form>   
      }

      {registered &&
      <>
        <NavLink 
        to="/connexion"
        exact
        >
        <li  className="">Parfait tu peux maintenant te connecter !</li>        
        </NavLink>
       </> 
        
      }
    </>
     
  );
};

export default RegisterForm;
