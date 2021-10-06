<<<<<<< HEAD
import { NavLink } from 'react-router-dom';

import './style.scss';
=======
import { useDispatch, useSelector } from 'react-redux';
import { typeValues } from 'src/actions/profil';

import './style.scss';

import Field from 'src/components/Forms/Field';
>>>>>>> feature/foodtruckPage

 const Profil = () => {

  // const for the storage data
  const data = JSON.parse(sessionStorage.getItem('key'));
  const informations = data.data;
  console.log(data);
  

  // const for the state
  const nicknameProfil = useSelector(state => state.profil.nicknameProfil);
  const emailProfil = useSelector(state => state.profil.emailProfil);
  const firstnameProfil = useSelector(state => state.profil.firstnameProfil);
  const lastnameProfil = useSelector(state => state.profil.lastnameProfil);
  const addressProfil = useSelector(state => state.profil.addressProfil);
  const cityProfil = useSelector(state => state.profil.cityProfil);
  const postCodeProfil = useSelector(state => state.profil.postCodeProfil);
  
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // dispatch({
    //   type: 'UPDATE_INFORMATIONS'
    // })
  }

  const onFieldChange = (key, value) => {
    dispatch(
      typeValues(key, value)
    );
  }
  
  return (
    <>
      <div>
        <div className="profil">
          <div className="profil_nickname"> On est sur ton profil {informations.nickname} </div>
          <div className="profil_email"> Voici ton email {informations.email} </div>
          <div className="profil_firstname"> Voici ton prénom {informations.firstname} </div>
          <div className="profil_lastname"> Voici ton nom de famille {informations.lastname} </div>
          <div className="profil_address"> Voici ton adresse {informations.address} </div>
        </div>

        <form onSubmit={handleSubmit} className="profil_form"> 
          <div className='profilForm'>

            <div className='nicknameForm'>
              <Field
                form="profil"
                name="nicknameProfil"
                value={nicknameProfil}
                type="text"
                placeholder="Identifiant"
                onFieldChange={onFieldChange}
              />
            </div>

            <div className='emailForm'>
              <Field
                form="profil"
                name="emailProfil"
                value={emailProfil}
                type="text"
                placeholder="E-Mail"
                onFieldChange={onFieldChange}
              />
            </div>
              
            <div className='firstnameForm'>
              <Field
                form="profil"
                name="firstnameProfil"
                value={firstnameProfil}
                type="text"
                placeholder="Prénom"
                onFieldChange={onFieldChange}
              />
            </div>
              
            <div className='lastnameForm'>
              <Field
                form="profil"
                name="lastnameProfil"
                value={lastnameProfil}
                type="text"
                placeholder="Nom de famille"
                onFieldChange={onFieldChange}
              />
            </div>

            <div className='addressForm'>
              <Field
                form="profil"
                name="addressProfil"
                value={addressProfil}
                type="text"
                placeholder="Adresse Postale"
                onFieldChange={onFieldChange}
              />
            </div>

            <div className='cityForm'>
              <Field
                form="profil"
                name="cityProfil"
                value={cityProfil}
                type="text"
                placeholder="Ville"
                onFieldChange={onFieldChange}
              />
            </div>

<<<<<<< HEAD
<div>On est sur ton profil</div>
=======
            <div className='postCodeForm'>
              <Field
                form="profil"
                name="postCodeProfil"
                value={postCodeProfil}
                type="text"
                placeholder="Code Postal"
                onFieldChange={onFieldChange}
              />
            </div>
            
          </div>
        </form>
      </div>
    </>
>>>>>>> feature/foodtruckPage
  );
};

export default Profil;
