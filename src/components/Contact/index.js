import { changeValue } from 'src/actions/contact';
import { useDispatch, useSelector } from 'react-redux';
import Field from 'src/components/Forms/Field';

import './style.scss';

const Contact = () => {

  const nameContact = useSelector(state => state.contact.nameContact);
  const emailContact = useSelector(state => state.contact.emailContact);
  const objectContact = useSelector(state => state.contact.objectContact);
  const messageContact = useSelector(state => state.contact.messageContact);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchEvent({
      type: 'SEND_MESSAGE'
    })
  }

  const dispatch = useDispatch();
  const onFieldChange = (key, value) => {
    dispatch(
      changeValue(key, value)
    );
  }
 
  return(
<>
<form onSubmit={handleSubmit} className="settings-form">
        <Field
          name="nameContact"
          value={nameContact}
          type="name"
          placeholder="Nom"
          onFieldChange={onFieldChange}
        />
        <Field
          name="emailContact"
          value={emailContact}
          type="email"
          placeholder="E-mail"
          onFieldChange={onFieldChange}
        />
        <Field
          name="objectContact"
          value={objectContact}
          type="object"
          placeholder="Objet du message"
          onFieldChange={onFieldChange}
        />
        <Field
          name="messageContact"
          value={messageContact}
          type="message}"
          placeholder="Votre message"
          onFieldChange={onFieldChange}
        />
        <button 
        type="submit"
        className="login-form-button"
        >
          Envoyer
        </button>
      </form>   
   
</>
  );
};

export default Contact;
