import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { MdClose } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

// import MarkerPin from '../MarkerPin'



const Modal = ({ isShowing, hide, name, street, postal_code, city, phone, payment, menuURL, pictureURL, description, planning, category, categorycolor}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal_background">
            <div className="modal_container">
              <div className="modal">

                <div className="modal_top">
                  <img className="modal_top_picture" src={pictureURL}/>
                  <p className="modal_top_name">{name}</p>
                  <p className="modal_top_category" style={{backgroundColor: categorycolor}}>{category}</p>
                  <button type="button" className="modal_top_closebutton" onClick={hide}>
                    <span><MdClose /></span>
                  </button>
                </div>

                <div className="modal_middle">
                  <p className="modal_middle_description">{description}</p>
                  <div className="modal_middle_address">
                    <MdLocationOn />
                    <p className="modal_middle_address_street">{street}</p>
                    <p className="modal_middle_address_postalcode">{postal_code}</p>
                    <p className="modal_middle_address_city">{city}</p>
                    <p className="modal_middle_phone">0{phone}</p>
                    <p className="modal_middle_payment">{payment}</p>
                  </div>
                  <div className="modal_bottom">
                    <p className="modal_bottom_planning">{planning}</p>
                    <img className="modal_bottom_menu" src={menuURL}/>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </>,

        document.body
    )
    : null;

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Modal;
