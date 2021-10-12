import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { MdClose } from "react-icons/md";

const Modal = ({ isShowing, hide, name, ...props }) =>
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

                <div className="modal_body">{props.children}</div>
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
  name: PropTypes.string.isRequired
};

export default Modal;
