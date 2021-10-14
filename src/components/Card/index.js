import React from 'react';
import PropTypes from 'prop-types';
import { MdLocationOn } from "react-icons/md";


import Modal from 'src/components/Modal';
import useModal from "src/components/Modal/useModal";


const Card = ({
  name,
  category,
  picture,
  slug,
  city,
  postal_code,
  payment,
  street,
  phone,
  menu,
  description,
  planning,
}) => {


  const categoryName = category.name
  const categoryColor = category.color

  const pictureHTTP = picture;
  const menuHTTP = menu;

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
              <img className="card_foodtruck_content_header_img" src={pictureHTTP} alt={slug}/>
              <p className="card_foodtruck_content_header_title">{name}</p>
              <p className="card_foodtruck_content_header_subtitle" style={{backgroundColor: categoryColor}}>{categoryName}</p>
            </div>

            <div className="card_foodtruck_content_description">
              <MdLocationOn />
              <div className="card_foodtruck_content_description_address">
                <p className="card_foodtruck_content_description_address_street">{street}</p>
                <div className="card_foodtruck_content_description_address_postalcodeandcity">
                  <p className="card_foodtruck_content_description_address_postalcode">{postal_code}</p>
                  <p className="card_foodtruck_content_description_address_city">{city}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

          
            <Modal
              isShowing={isModalShowed}
              hide={toggleModal}
              name={name}
              category={categoryName}
              categorycolor={categoryColor}
              picture={picture}
              street={street}
              city={city}
              postal_code={postal_code}
              payment={payment}
              phone={phone}
              menuHTTP={menuHTTP}
              pictureHTTP={pictureHTTP}
              description={description}
              planning={planning}
            >
            </Modal>
          </>

);
}

Card.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  street : PropTypes.string.isRequired,
  city : PropTypes.string.isRequired,
  postal_code : PropTypes.number.isRequired,
  payment : PropTypes.string.isRequired,
  phone : PropTypes.number.isRequired,
  description : PropTypes.string.isRequired,
  planning : PropTypes.string.isRequired,
};

export default Card;
