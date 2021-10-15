import Field from 'src/components/Forms/Field';
import FieldSwitch from 'src/components/Forms/Field/switch';

import { changeValueRegister } from 'src/actions/register';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';


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
          <div className="contact_result">
            <div className="contact_result_message" >Ton inscription a bien été prise en compte</div>
            <div className="contact_result_message" >tu peux maintenant te connecter</div>
            <button className="login_form_button">CONNEXION</button>
          </div>        
        </NavLink>
       </> 
        
      }
    </>
     
  );
};

export default RegisterForm;
