import React from 'react';
import Field from 'src/components/Forms/Field';

import Modal_lostemail from 'src/components/Modal/modal_lostemail';
import useModal from "src/components/Modal/useModal";


import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { changeValue } from 'src/actions/users';


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

  // MODAL //
  const { isShowing: isModalShowed, toggle: toggleModal } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();
  // /MODAL //



  return (
    <>
      {logged && 
      <Redirect to="/" />
      }
      <form autoComplete="off" className="login_form_element" onSubmit={handleSubmit}>
        <div className="login_form_title" >Connexion</div>
        <Field
          form="login"
          name="email"
          value={email}
          type="email"
          placeholder="E-mail"
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

        <div onClick={toggleModal} className="login_form_forget"> Mot de passe oublié ?</div>

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

      <Modal_lostemail
        isShowing={isModalShowed}
        hide={toggleModal}
      >
      </Modal_lostemail>
    </>

    
  );
};

export default LoginForm;
