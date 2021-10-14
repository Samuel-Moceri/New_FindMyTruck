import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Field from 'src/components/Forms/Field';

import { useDispatch, useSelector } from 'react-redux';
import { changeValue } from 'src/actions/users';
import { MdClose } from "react-icons/md";

const Modal_lostemail = ({ isShowing, hide}) => {

  const emailLost = useSelector(state => state.user.emailLost);
  console.log(emailLost);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_EMAIL'
      
    })

  }

  const onFieldChange = (key, value) => {
    dispatch(
      changeValue(key, value)
    );
  }

  return (
    isShowing ? ReactDOM.createPortal(
      <>
        <div className="modal_background_lostemail">
          <div className="modal_container_lostemail">
            {/* <div className="modal_lostemail"> */}
              <form autoComplete="off" className="modal_lostemail" onSubmit={handleSubmit}>
                <Field
                form="emailLost"
                name="emailLost"
                type="email"
                value={emailLost}
                placeholder="Entrez votre email"
                className="modal_lostemail_email"
                onFieldChange={onFieldChange}
                required='required'
                />

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
