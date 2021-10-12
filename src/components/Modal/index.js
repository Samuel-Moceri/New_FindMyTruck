import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { MdClose } from "react-icons/md";

const Modal = ({ isShowing, hide, name, street, postal_code, city, phone, payment, menuURL, pictureURL, description, planning}) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal_background">
            <div className="modal_container">
              <div className="modal">

                <div className="modal_header">
                  <p className="modal_header_name">{name}</p>
                  <button type="button" className="modal_header_closebutton" onClick={hide}>
                    <span><MdClose /></span>
                  </button>
                </div>

                <div className="modal_body">
              
                  <p className="modal_body_description">{description}</p>

                  <p className="modal_body_street">{street}</p>
                  <p className="modal_body_postalcode">{postal_code}</p>
                  <p className="modal_body_city">{city}</p>
                  <p className="modal_body_phone">0{phone}</p>
                  <p className="modal_body_payment">{payment}</p>
                  <p className="modal_body_planning">{planning}</p>
                  <img className="modal_body_menu" src={menuURL}/>
                  <img className="modal_body_picture" src={pictureURL}/>
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
