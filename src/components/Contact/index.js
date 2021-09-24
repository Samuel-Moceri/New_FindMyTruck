import './style.scss';

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    }
    
  return(
<>
    <div>
    <img className="image" src="https://madeinmarseille-data.s3.eu-west-3.amazonaws.com/actualites-marseille/2021/05/28104900/food-truck-parc-borely-marseille.jpg" alt="foodtruck" />
    </div>
    <div className="contact">
  
      <form onSubmit={handleSubmit} className="contact_form">
        <h1>Contactez-nous !</h1>
        <input
        className="contact_form_mail"
        placeholder="Votre e-mail"
        type="text"
        />
        <input
        className="contact_form_object"
        placeholder="Objet du message"
        type="text"
        />
        <input
        className="contact_form_message"
        placeholder="Votre message"
        type="textarea"
        />
        <button>Envoyer</button>
      </form>
    </div>
</>
  );
};

export default Contact;
