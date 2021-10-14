import { useDispatch, useSelector } from 'react-redux';
import { typeValues } from 'src/actions/profil';
import ContactFieldTextarea from 'src/components/Contact/Field/textarea';


import Field from 'src/components/Forms/Field';
import { useEffect } from 'react';

import { MdOutlinePersonPin, MdLocalShipping, MdOutlineBusiness } from "react-icons/md";

 const Profil = () => {

  // const for the storage data
  const data = JSON.parse(sessionStorage.getItem('key'));
  const informations = data.data;
  const informationsFoodtruck = informations.user_foodtruck;
  

  // const for the state
  const nicknameProfil = useSelector(state => state.profil.nicknameProfil);
  const emailProfil = useSelector(state => state.profil.emailProfil);
  const firstnameProfil = useSelector(state => state.profil.firstnameProfil);
  const lastnameProfil = useSelector(state => state.profil.lastnameProfil);
  const role = useSelector(state=> state.profil.roles);

  const nameFoodtruck = useSelector(state=> state.profil.nameFoodtruck);
  const phoneFoodtruck = useSelector(state => state.profil.phoneFoodtruck);
  const descriptionFoodtruck = useSelector(state => state.profil.descriptionFoodtruck);
  const planningFoodtruck = useSelector(state => state.profil.planningFoodtruck);
  const paymentFoodtruck = useSelector(state => state.profil.paymentFoodtruck);
  const proaddressFoodtruck = useSelector(state => state.profil.proaddressFoodtruck);
  const streetFoodtruck = useSelector(state => state.profil.streetFoodtruck);
  const cityFoodtruck = useSelector(state => state.profil.cityFoodtruck);
  const postalCodeFoodtruck = useSelector(state => state.profil.postalCodeFoodtruck);
  const siretFoodtruck = useSelector(state => state.profil.siretFoodtruck);
  const menuFoodtruck = useSelector(state => state.profil.menuFoodtruck);
  const pictureFoodtruck = useSelector(state => state.profil.pictureFoodtruck);
  const warning = useSelector(state=> state.profil.warning);
  const modify = useSelector(state=> state.profil.modify);
  const reload = useSelector(state=> state.profil.reload);

  // console.log(role);

  let pictureURL = '';

  if(informationsFoodtruck) {
    const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
    pictureURL = baseURL+`${informationsFoodtruck.menu}`;
  }

  const dispatch = useDispatch();
  // Action qui se déclenche au chargement du composant et c'est tout
  useEffect(() => {
    dispatch({
      type: 'GET_USER_INFOS'
    })
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
      dispatch({
        type: 'UPDATE_INFORMATIONS',
        warning:true,
        reload: true,
      })
      // window.location.reload();
  }
  
  
  const onFieldChange = (key, value) => {
    dispatch(
      typeValues(key, value)
      );
    }
    
  const handleClick = (event) => {
    dispatch({
      type: 'SHOW_MODIFY_INFORMATIONS',
      modify:true
    })
  }

  const handleReload = (event) => {
    window.location.reload();
  }

  const hideModify = (event) => {
    dispatch({
      type: 'HIDE_MODIFY_INFORMATIONS',
      modify: false,
    })
    window.location.reload();
  }
    
    return (
    <div className="profil_form_element">
      <div className="profil_form_title">Profil de {nicknameProfil} </div>
      {modify===false && reload===false &&
        <>
          <div className="profil_form_user">
            <span className="profil_form_user_title"><MdOutlinePersonPin /> Utilisateur</span>
            <div className="profil_firstname"> Prénom : {firstnameProfil} </div>
            <div className="profil_lastname"> Nom de famille : {lastnameProfil} </div>
            <div className="profil_email"> E-mail : {emailProfil} </div>
          </div>
        </>
      }

      {role[0]==="ROLE_PRO" && modify===false  &&

      <>
        <div className="profil_form_pro">
          <span className="profil_form_pro_title"><MdLocalShipping /> FoodTruck </span>
          <div className="profil_form_pro_name"> Nom de ton FoodTruck : {nameFoodtruck} </div>
          <div className="profil_form_pro_city"> Adresse de stationnement : {cityFoodtruck} </div>
          <div className="profil_form_pro_description"> Ta description : {descriptionFoodtruck} </div>
          <div  className="profil_form_pro_planning"> Ton planning : {planningFoodtruck} </div>
          <div className="profil_form_pro_phone"> Numéro de téléphone : 0{phoneFoodtruck} </div>
          <div className="profil_form_pro_payment"> Paiement accepté : {paymentFoodtruck} </div>

          <div className="profil_form_pro_menu">Menu :</div>
            <img src={menuFoodtruck} alt="menu du foodtruck" />
          <div className="profil_form_pro_menu"> Image du FoodTruck :</div>
            <img src={pictureFoodtruck} alt="menu du foodtruck" />
        </div>
        
        <div className="profil_form_compagny">
          <span className="profil_form_compagny_title"><MdOutlineBusiness />Société</span>
          <div className="profil_form_compagny_address"> Ton adresse de société : {proaddressFoodtruck} </div>
          <div className="profil_form_compagny_siret"> Ton SIRET : {siretFoodtruck} </div>
        </div> 

      </>
      }

      {modify===true && reload === false &&
        <form onSubmit={handleSubmit} className="profil_form"> 
          <div className='profilForm'>

            <div className="profil_form_user">
              <span className="profil_form_user_title"><MdOutlinePersonPin /> Utilisateur</span>
              <div className='firstnameForm'>
                <Field
                  form="profil"
                  name="firstnameProfil"
                  value={firstnameProfil}
                  type="text"
                  placeholder="Prénom"
                  onFieldChange={onFieldChange}
                  required='required'
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
                  required='required'
                />
              </div>
              <div className='emailForm'>
                <Field
                  form="profil"
                  name="emailProfil"
                  value={emailProfil}
                  type="email"
                  placeholder="E-Mail"
                  onFieldChange={onFieldChange}
                  required='required'
                />
              </div>
            </div>

            {role[0]==="ROLE_PRO" && reload === false &&
            <div>

              <div className="profil_form_pro">
                <span className="profil_form_pro_title"><MdLocalShipping /> FoodTruck</span>
                <div className='nameFtProfilForm'>
                  <Field
                    form="profil"
                    name="nameFoodtruck"
                    value={nameFoodtruck}
                    type="text"
                    placeholder="Nom du FoodTruck"
                    onFieldChange={onFieldChange}
                    required='required'
                  />
                </div>
                <div className='phoneProfilForm'>
                  <Field
                    form="profil"
                    name="phoneFoodtruck"
                    value={phoneFoodtruck}
                    type="number"
                    placeholder="Téléphone du FoodTruck"
                    onFieldChange={onFieldChange}
                    required='required'
                  />
                </div>
                <div className='descriptionProfilForm'>
                  <Field
                    form="profil"
                    name="descriptionFoodtruck"
                    value={descriptionFoodtruck}
                    type="text"
                    placeholder="Description du FoodTruck"
                    onFieldChange={onFieldChange}
                    required='required'
                  />
                </div>
                <div className='planningProfilForm'>
                  <ContactFieldTextarea 
                    form="profil"
                    name="planningFoodtruck"
                    value={planningFoodtruck}
                    type="message"          
                    placeholder="Votre planning"
                    onFieldContactChange={onFieldChange}
                    required='required'
                  />
                </div>
                <div className='paymentProfilForm'>
                  <Field
                    form="profil"
                    name="paymentFoodtruck"
                    value={paymentFoodtruck}
                    type="text"
                    placeholder="Moyen de paiement accepté"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>

                <div className='streetForm'>
                  <Field
                    form="profil"
                    name="streetFoodtruck"
                    value={streetFoodtruck}
                    type="text"
                    placeholder="Position du Foodtruck"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
                <div className='cityForm'>
                  <Field
                    form="profil"
                    name="cityFoodtruck"
                    value={cityFoodtruck}
                    type="text"
                    placeholder="Ville"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
                <div className='postal_codeForm'>
                  <Field
                    form="profil"
                    name="postalCodeFoodtruck"
                    value={postalCodeFoodtruck}
                    type="number"
                    placeholder="Code Postal"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>

                <div className='menuProfil'>
                  <Field
                    form="profil"
                    name="menuFoodtruck"
                    value={menuFoodtruck}
                    type="text"
                    placeholder="Menu"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
                <div className='pictureProfil'>
                  <Field
                    form="profil"
                    name="pictureFoodtruck"
                    value={pictureFoodtruck}
                    type="text"
                    placeholder="Image du Foodtruck"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
              </div>

              <div className="profil_form_compagny">
                <span className="profil_form_pro_title"><MdOutlineBusiness /> Société </span>
                <div className='siretForm'>
                  <Field
                    form="profil"
                    name="siretFoodtruck"
                    value={siretFoodtruck}
                    type="number"
                    placeholder="Numéro SIRET"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
                <div className='proaddressProfilForm'>
                  <Field
                    form="profil"
                    name="proaddressFoodtruck"
                    value={proaddressFoodtruck}
                    type="text"
                    placeholder="Adresse de la société"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
              </div>

            </div>
            }
            
          </div>

          <input type="submit" className="profil_form_button_save" value="ENREGISTRER LES INFORMATIONS"></input>
        </form>
      }

      {reload===true &&
        <button className="profil_form_button_modify" onClick={handleReload}> Retourner sur ton profil </button>
      }
      
      {modify===false && reload === false &&
        <button className="profil_form_button_modify" onClick={handleClick}> Modifier les informations </button>
        }

      {modify===true &&
        <button className="profil_form_button_cancel" onClick={hideModify}> Annuler les changements </button>
      }

    </div>
    );
    
};

export default Profil;
