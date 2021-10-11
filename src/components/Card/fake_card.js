import React from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";

import FMT_Mockup from 'src/assets/images/background/FMT_Mockup.jpg';



// import './style.scss';

const Fake_Card = ({}) => {
  

  
  return(

    <section className="card_foodtruck">
      <div className="card_foodtruck_content">
        <div className="card_foodtruck_content_header">
          <img className="card_foodtruck_content_header_img" src={FMT_Mockup}/>
          <p className="card_foodtruck_content_header_title">FOODTRUCK</p>
          <p className="card_foodtruck_content_header_subtitle">catégorie</p>
        </div>

        <div className="card_foodtruck_content_description">
          <MdLocationOn /> 
          <div className="card_foodtruck_content_description_adress">
            <p className="card_foodtruck_content_description_adress_street">Rue</p>
            <div className="card_foodtruck_content_description_adress_postalcodeandcity">
              <p className="card_foodtruck_content_description_adress_postalcode">Code postal &nbsp;</p>
              <p className="card_foodtruck_content_description_adress_city">Ville</p>
            </div>
          </div>
        </div>
      </div>
    </section>

);
}

// Card.propTypes = {
//   thumbnail: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
// };

export default Fake_Card;
