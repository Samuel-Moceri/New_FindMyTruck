import { changeValues } from 'src/actions/contact';
import { useDispatch, useSelector } from 'react-redux';
import ContactField from 'src/components/Contact/Field';
import ContactFieldTextarea from 'src/components/Contact/Field/textarea';
import { Link, Redirect } from 'react-router-dom';



const Contact = () => {

  const nameContact = useSelector(state => state.contact.nameContact);
  const emailContact = useSelector(state => state.contact.emailContact);
  const objectContact = useSelector(state => state.contact.objectContact);
  const messageContact = useSelector(state => state.contact.messageContact);
  const contactSent = useSelector(state => state.contact.contactSent);

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
{contactSent===false &&

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
  }

  {contactSent===true &&

  <div className="contact_result">
    <div className="contact_result_message" >Ta demande a bien été envoyée</div>
    <button className="contact_result_button"  >
      <a href="/" >Retour à l'accueil</a>
    </button>
  </div>
  }


</>

  );
};

export default Contact;
