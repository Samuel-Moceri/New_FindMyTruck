import React from 'react';
import { MdLocationOn } from "react-icons/md";

import Modal from 'src/components/Modal';
import useModal from "src/components/Modal/useModal";

// import './style.scss';

const Card = ({
  id,
  name,
  category,
  picture,
  slug,
  city,
  postal_code,
  payment,
  street,
  phone,
}) => {
    
  const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';

  const categoryName = category.name
  const categoryColor = category.color

  const pictureURL = baseURL+`${picture}`;

  // MODAL //
  const { isShowing: isModalShowed, toggle: toggleModal } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();
  // /MODAL //

  return(
    <>
    <section 
      className="card_foodtruck"
      
    >
          <div className="card_foodtruck_content" onClick={toggleModal}>
            <div className="card_foodtruck_content_header">
              <img className="card_foodtruck_content_header_img" src={pictureURL} alt={slug}/>
              <p className="card_foodtruck_content_header_title">{name}</p>
              <p className="card_foodtruck_content_header_subtitle" style={{backgroundColor: categoryColor}}>{categoryName}</p>
            </div>

            <div className="card_foodtruck_content_description">
              <MdLocationOn />
              <div className="card_foodtruck_content_description_adress">
                <p className="card_foodtruck_content_description_adress_street">{street}</p>
                <div className="card_foodtruck_content_description_adress_postalcodeandcity">
                  <p className="card_foodtruck_content_description_adress_postalcode">{postal_code} &nbsp;</p>
                  <p className="card_foodtruck_content_description_adress_city">{city}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

          
            <Modal
              isShowing={isModalShowed}
              hide={toggleModal}
              name="NOM DU FOODTRUCK"
            >
              <form>
                <div className="form-group">
                  <div type="text" placeholder="FOODTRUCK">CATEGORIE</div>
                </div>
                <div className="form-group">
                  <div type="text" placeholder="FOODTRUCK">ADRESSE</div>
                </div>
              </form>
            </Modal>
          </>

  // <>
  //   <section className="card_foodtruck">
  //     <img 
  //       className="card_foodtruck_img"
  //       src={pictureURL} 
  //       // src={thumbnail} 
  //       alt={slug}  
  //     />
  //     <div className="card_foodtruck_content">
  //       <p className="card_foodtruck_content_title">{name}</p>
  //       <div className="card_foodtruck_content_subtitle">
  //         <p className="card_foodtruck_content_category">{categoryName}</p>
  //         <p className="card_foodtruck_content_rating"></p>
  //       </div>
  //       <div className="card_foodtruck_content_description">
  //         <CgPin />
  //         <p>{street}</p>
  //         <p>{city}</p>
  //         <p>{postal_code}</p>
  //         <p>{payment}</p>
  //         <p>{phone}</p>
  //       </div>
  //     </div>
  //   </section>  
  // </>


);
}

// Card.propTypes = {
//   thumbnail: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
// };

export default Card;
