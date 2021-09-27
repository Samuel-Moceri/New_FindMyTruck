import { changeValues } from 'src/actions/contact';
import { useDispatch, useSelector } from 'react-redux';
import ContactField from 'src/components/Contact/Field';

import './style.scss';

const Contact = () => {

  const nameContact = useSelector(state => state.contact.nameContact);
  const emailContact = useSelector(state => state.contact.emailContact);
  const objectContact = useSelector(state => state.contact.objectContact);
  const messageContact = useSelector(state => state.contact.messageContact);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'SEND_MESSAGE'
    })
  }

  const dispatch = useDispatch();
  const onFieldContactChange = (key, value) => {
    dispatch(
      changeValues(key, value)
    );
  }
    // Tester de créer notre propre onchange au lieu du OnField
  return(
<>
<form onSubmit={handleSubmit} className="settings-form">
        <ContactField
          name="nameContact"
          value={nameContact}
          type="name"
          placeholder="Nom"
          onFieldContactChange={onFieldContactChange}
        />
        <ContactField
          name="emailContact"
          value={emailContact}
          type="email"
          placeholder="E-mail"
          onFieldContactChange={onFieldContactChange}
        />
        <ContactField
          name="objectContact"
          value={objectContact}
          type="object"
          placeholder="Objet du message"
          onFieldContactChange={onFieldContactChange}
        />
        <ContactField
          name="messageContact"
          value={messageContact}
          type="message"
          placeholder="Votre message"
          onFieldContactChange={onFieldContactChange}
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
