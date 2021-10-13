import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { MdClose } from "react-icons/md";
import { MdLocationOn, MdOutlineFacebook, MdWebAsset, MdLocalPhone,MdCreditCard, MdEuroSymbol  } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";


// import MarkerPin from '../MarkerPin'



const Modal = ({ isShowing, hide, name, street, postal_code, city, phone, payment, menuHTTP, pictureHTTP, description, planning, category, categorycolor}) =>

  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal_background">
            <div className="modal_container">
              <div className="modal">

                <div className="modal_top">
                  <img className="modal_top_picture" src={pictureHTTP}/>
                  <p className="modal_top_name">{name}</p>
                  <p className="modal_top_category" style={{backgroundColor: categorycolor}}>{category}</p>
                  <button type="button" className="modal_top_closebutton" onClick={hide}>
                    <span><MdClose /></span>
                  </button>
                </div>

                  <p className="modal_middle_description">{description}</p>
                <div className="modal_middle">
                  <div className="modal_middle_contact">
                    {/* <MdLocationOn /> */}
                    <p className="modal_middle_contact_street"><MdLocationOn />{street}</p>
                    <p className="modal_middle_contact_postalcode">{postal_code}</p>
                    <p className="modal_middle_contact_city">{city}</p>
                    {/* <MdLocalPhone /> */}
                    <p className="modal_middle_contact_phone"><MdLocalPhone />{phone}</p>
                  </div>
                  <div className="modal_middle_other">
                    <p className="modal_middle_other_payment"><MdEuroSymbol />{payment}</p>
                    <div className="modal_middle_other_link">
                      <span className="modal_middle_other_link_icon"><MdOutlineFacebook /></span>
                      <span className="modal_middle_other_link_icon"><MdWebAsset /></span>
                      <span className="modal_middle_other_link_icon"><IoLogoInstagram /></span>
                    </div>
                  </div>
                </div>
                <div className="modal_bottom">
                  <div className="modal_bottom_planning">
                  {/* {planning} */}
                    <div className="modal_bottom_planning_day">LUNDI: 
                      <p className="modal_bottom_planning_hours"> 12:00-14:00 / - </p>
                    </div>
                    <div className="modal_bottom_planning_day">MARDI: 
                      <p className="modal_bottom_planning_hours"> 12:00-14:00 / - </p>
                    </div>
                    <div className="modal_bottom_planning_day">MERCREDI: 
                      <p className="modal_bottom_planning_hours"> 12:00-14:00 / - </p>
                    </div>
                    <div className="modal_bottom_planning_day">JEUDI: 
                      <p className="modal_bottom_planning_hours"> 12:00-14:00 / - </p>
                    </div>
                    <div className="modal_bottom_planning_day">VENDREDI: 
                      <p className="modal_bottom_planning_hours"> 12:00-14:00 / 19:00 22:00 </p>
                    </div>
                    <div className="modal_bottom_planning_day">SAMEDI: 
                      <p className="modal_bottom_planning_hours"> 12:00-14:00 / 19:00 22:00 </p>
                    </div>
                    <div className="modal_bottom_planning_day">DIMANCHE: 
                      <p className="modal_bottom_planning_hours"> 12:00-14:00 / - </p>
                    </div>

                    
                  </div>
                  <img className="modal_bottom_menu" src={menuHTTP}/>
                  
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
