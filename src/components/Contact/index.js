import { changeValues } from 'src/actions/contact';
import { useDispatch, useSelector } from 'react-redux';
import ContactField from 'src/components/Contact/Field';
import ContactFieldTextarea from 'src/components/Contact/Field/textarea';


// import './style.scss';

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

  <form onSubmit={handleSubmit} className="contact_form_element">
    <div className="contact_form_title">Contactez-nous</div>
    <ContactField
      form="contact"
      name="nameContact"
      value={nameContact}
      type="name"
      placeholder="Nom"
      onFieldContactChange={onFieldContactChange}
      required='required'
    />
    <ContactField
      form="contact"
      name="emailContact"
      value={emailContact}
      type="email"
      placeholder="E-mail"
      onFieldContactChange={onFieldContactChange}
      required='required'
    />
    <ContactField
      form="contact"
      name="objectContact"
      value={objectContact}
      type="object"
      placeholder="Objet du message"
      onFieldContactChange={onFieldContactChange}
      required='required'
    />
    <ContactFieldTextarea 
      form="contact"
      name="messageContact"
      value={messageContact}
      type="message"          
      placeholder="Votre message"
      onFieldContactChange={onFieldContactChange}
      required='required'
    />
    <button 
    type="submit"
    className="contact_form_button"
    >
      Envoyer
    </button>
  </form>


  
</>

  );
};

export default Contact;
