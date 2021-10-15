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
            <div className="profil_first_part profil_firstname"> 
              Prénom : 
              <span>{firstnameProfil}</span> 
            </div>
            <div className="profil_first_part profil_lastname"> 
              Nom : 
              <span>{lastnameProfil}</span>
            </div>
            <div className="profil_first_part profil_email"> 
              E-mail : 
              <span>{emailProfil}</span>
            </div>
          </div>
        </>
      }

      {role[0]==="ROLE_PRO" && modify===false  &&

      <>
        <div className="profil_form_pro">
          <span className="profil_form_pro_title"><MdLocalShipping /> FoodTruck </span>
          <div className="profil_first_part profil_form_pro_name "> 
            Nom : 
            <span>{nameFoodtruck}</span>
          </div>
          <div className="profil_first_part profil_form_pro_city">
            Stationnement : 
            <span>{cityFoodtruck} </span>
          </div>
          <div className="profil_first_part profil_form_pro_description "> 
            Description : 
            <span>{descriptionFoodtruck}</span>
          </div>
          <div  className="profil_first_part profil_form_pro_planning"> 
            Planning : 
            <span>{planningFoodtruck} </span>
          </div>
          <div className="profil_first_part profil_form_pro_phone"> 
            N° Téléphone : 
            <span>0{phoneFoodtruck} </span>
          </div>
          <div className="profil_first_part profil_form_pro_payment"> 
          Paiement : 
          <span>{paymentFoodtruck}</span> 
          </div>

          <div className="menuandimage">
            <div className="profil_form_pro_menu">
              {/* Menu : */}
            <img src={menuFoodtruck} alt="menu du foodtruck" />

            </div>
            <div className="profil_form_pro_image"> 
            {/* Image du FoodTruck : */}
            <img src={pictureFoodtruck} alt="image du foodtruck" />
            </div>
          </div> 
        </div>
        
        <div className="profil_form_compagny">
          <span className="profil_form_compagny_title"><MdOutlineBusiness />Société</span>
          <div className="profil_first_part profil_form_compagny_address">
            Domiciliation : 
            <span>{proaddressFoodtruck}</span>
          </div>
          <div className="profil_first_part profil_form_compagny_siret"> 
            SIRET : 
            <span>{siretFoodtruck} </span>
          </div>
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
                  placeholder="Nom"
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
                    placeholder="Nom"
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
                    placeholder="N° Téléphone"
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
                    placeholder="Description"
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
                    placeholder="Planning"
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
                    placeholder="Paiement"
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
                    placeholder="Stationnement"
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


                <div className="menuandimage_edit">
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
                      placeholder="Photo / Logo"
                      onFieldChange={onFieldChange}
                      // required='required'
                    />
                  </div>
                </div>
              </div>

              <div className="profil_form_compagny">
                <span className="profil_form_pro_title"><MdOutlineBusiness /> Société </span>
                
                <div className='proaddressProfilForm'>
                  <Field
                    form="profil"
                    name="proaddressFoodtruck"
                    value={proaddressFoodtruck}
                    type="text"
                    placeholder="Domiciliation"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
                <div className='siretForm'>
                  <Field
                    form="profil"
                    name="siretFoodtruck"
                    value={siretFoodtruck}
                    type="number"
                    placeholder="SIRET"
                    onFieldChange={onFieldChange}
                    // required='required'
                  />
                </div>
              </div>

            </div>
            }
            
          </div>

          <input type="submit" className="profil_form_button_save" value="ENREGISTRER"></input>
        </form>
      }

      {reload===true &&
        <button className="profil_form_button_modify" onClick={handleReload}> Retourner sur ton profil </button>
      }
      
      {modify===false && reload === false &&
        <button className="profil_form_button_modify" onClick={handleClick}> Modifier</button>
        }

      {modify===true &&
        <button className="profil_form_button_cancel" onClick={hideModify}> Annuler les modifications </button>
      }

    </div>
    );
    
};

export default Profil;
