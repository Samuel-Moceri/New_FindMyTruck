import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { useDispatch } from 'react-redux';
import { changeValue } from 'src/actions/users';
import { MdClose } from "react-icons/md";

const Modal_lostemail = ({ isShowing, hide, emaillost}) => {

  const dispatch = useDispatch();

  const handleChangeEmail = (evt) => {
    onFieldChange(name, evt.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_EMAIL',
      // hide = true
    })
  }

return (
isShowing ? ReactDOM.createPortal(
        <>
          <div className="modal_background_lostemail">
            <div className="modal_container_lostemail">
              {/* <div className="modal_lostemail"> */}
                <form autoComplete="off" className="modal_lostemail" onSubmit={handleSubmit}>
                  <input
                  form="send"
                  name="emaillost"
                  type="email"
                  placeholder="Entrez votre email"
                  className="modal_lostemail_email"
                  onChange={handleChangeEmail}
                  required='required'
                  >                  
                  </input>

                  <button
                  type="submit"
                  className="modal_lostemail_email_button"
                  >
                    ENVOYER
                  </button>

                  <button type="button" className="modal_lostemail_top_closebutton" onClick={hide}>
                      <span><MdClose /></span>
                  </button>
                </form>
              </div>
            </div>
          {/* </div> */}
        </>,

        document.body
    )
    : null
)
};

Modal_lostemail.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default Modal_lostemail;
