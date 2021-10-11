import { useDispatch, useSelector } from 'react-redux';
import { typeValues } from 'src/actions/profil';

import './style.scss';

import Field from 'src/components/Forms/Field';
import { useEffect } from 'react';

 const Profil = () => {

  // const for the storage data
  const data = JSON.parse(sessionStorage.getItem('key'));
  const informations = data.data;
  const informationsFoodtruck = informations.user_foodtruck;
  // console.log(informationsFoodtruck);
  

  // const for the state
  const nicknameProfil = useSelector(state => state.profil.nicknameProfil);
  const emailProfil = useSelector(state => state.profil.emailProfil);
  const firstnameProfil = useSelector(state => state.profil.firstnameProfil);
  const lastnameProfil = useSelector(state => state.profil.lastnameProfil);

  const nameFtProfil = useSelector(state=> state.profil.nameFtProfil);
  const phoneProfil = useSelector(state => state.profil.phoneProfil);
  const descriptionProfil = useSelector(state => state.profil.descriptionProfil);
  const planningProfil = useSelector(state => state.profil.planningProfil);
  const paymentProfil = useSelector(state => state.profil.paymentProfil);
  const proaddressProfil = useSelector(state => state.profil.proaddressProfil);
  const streetProfil = useSelector(state => state.profil.streetProfil);
  const cityProfil = useSelector(state => state.profil.cityProfil);
  const postalCodeProfil = useSelector(state => state.profil.postalCodeProfil);
  const warning = useSelector(state=> state.profil.warning);
  const modify = useSelector(state=> state.profil.modify);
  const role = useSelector(state=> state.profil.roles);

  console.log(role);

  
  // const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  // const pictureURL = baseURL+`${informationsFoodtruck.menu}`;

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
    })
  }
  
  const onFieldChange = (key, value) => {
    dispatch(
      typeValues(key, value)
      );
    }
    
    const handleClick = (event) => {
      // console.log('blabla');
      dispatch({
        type: 'SHOW_MODIFY_INFORMATIONS',
        modify:true
      })
    }
    const hideModify = (event) => {
      // console.log('blabla');
      dispatch({
        type: 'HIDE_MODIFY_INFORMATIONS',
        modify:false
      })
    }
    
    return (
    <div>
      {modify===false &&
        <div className="profil_user">
          <div className="profil_nickname"> Bienvenue sur ton profil {nicknameProfil} </div>
          <div className="profil_firstname"> Prénom {firstnameProfil} </div>
          <div className="profil_lastname"> Nom de famille {lastnameProfil} </div>
          <div className="profil_email"> E-mail {emailProfil} </div>
        </div>
      }

      {role[0]==="ROLE_PRO" && modify===false &&

      <>
        <div className="profil_pro">
          <h1 className="title_profil_pro">Information du FoodTruck :</h1>
          <div className="profil_name"> Nom de ton FoodTruck : {informationsFoodtruck.name} </div>
          <div className="profil_city"> Adresse de stationnement : {informationsFoodtruck.city} </div>
          <div className="profil_description"> Ta description : {informationsFoodtruck.description} </div>
          <div className="profil_planning"> Ton planning : {informationsFoodtruck.planning} </div>
          <div className="profil_phone"> Numéro de téléphone : {informationsFoodtruck.phone} </div>
          <div className="profil_payment"> Paiement accepté : {informationsFoodtruck.payment} </div>
          <div className="profil_menu"> Menu : 
          {/* <img className="menu_foodtruck_content_header_img" src={pictureURL} /> */}
          </div>
        </div>
        
        <div className="société">
          <h1 className="society_profil_pro">Société : </h1>
          <div className="profil_address"> Ton adresse de société {informationsFoodtruck.proadress} </div>
        </div>  
      </>
      }

      {modify===true &&
        <form onSubmit={handleSubmit} className="profil_form"> 
          <div className='profilForm'>

            <div className='nicknameForm'>
              <Field
                form="profil"
                name="nicknameProfil"
                value={nicknameProfil}
                type="text"
                placeholder='IDENTIFIANT'
                onFieldChange={onFieldChange}
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

            {role[0]==="ROLE_PRO" &&
            <div>

              <div className='nameFtProfilForm'>
                  <Field
                    form="profil"
                    name="nameFtProfil"
                    value={nameFtProfil}
                    type="text"
                    placeholder="Nom du FoodTruck"
                    onFieldChange={onFieldChange}
                  />
                </div>

              <div className='phoneProfilForm'>
                <Field
                  form="profil"
                  name="phoneProfil"
                  value={phoneProfil}
                  type="number"
                  placeholder="Téléphone du FoodTruck"
                  onFieldChange={onFieldChange}
                />
              </div>

              <div className='descriptionProfilForm'>
                <Field
                  form="profil"
                  name="descriptionProfil"
                  value={descriptionProfil}
                  type="text"
                  placeholder="Description du FoodTruck"
                  onFieldChange={onFieldChange}
                />
              </div>
              
              <div className='planningProfilForm'>
                <Field
                  form="profil"
                  name="planningProfil"
                  value={planningProfil}
                  type="text"
                  placeholder="Planning du FoodTruck"
                  onFieldChange={onFieldChange}
                />
              </div>

              <div className='paymentProfilForm'>
                <Field
                  form="profil"
                  name="paymentProfil"
                  value={paymentProfil}
                  type="text"
                  placeholder="Moyen de paiement accepté"
                  onFieldChange={onFieldChange}
                />
              </div>

              <div className='proaddressProfilForm'>
                <Field
                  form="profil"
                  name="proaddressProfil"
                  value={proaddressProfil}
                  type="text"
                  placeholder="Adresse de la société"
                  onFieldChange={onFieldChange}
                />
              </div>

              <div className='streetForm'>
                <Field
                  form="profil"
                  name="streetProfil"
                  value={streetProfil}
                  type="text"
                  placeholder="Position du Foodtruck"
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

              <div className='postal_codeForm'>
                <Field
                  form="profil"
                  name="postalCodeProfil"
                  value={postalCodeProfil}
                  type="number"
                  placeholder="Code Postal"
                  onFieldChange={onFieldChange}
                />
              </div>
            </div>
            }
            
          </div>

          <input type="submit" className="modified_button" value="ENREGISTRER LES INFORMATIONS"></input>
        </form>
        
      }
      {modify===false &&
        <button onClick={handleClick}> Modifier les informations </button>
        }

      {modify===true &&
        <button onClick={hideModify}> Annuler les changements </button>
      }

      {warning===true &&
        <div className="warning">DECO RECO TOI SI TU VEUX VOIR LA DIFFERENCE</div>
      }
    </div>
      
    );
      
    
};

export default Profil;
