import React from 'react';
import {CgPin } from "react-icons/cg";
import { Link } from 'react-router-dom';

import './style.scss';

const Card = ({
  id,
  name,
  location,
  category,
  picture,
  slug,
}) => {

  const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  const categoryName = category.name
  const pictureURL = baseURL+`${picture}`;

  return(
  <Link to={`/foodtruck/${slug}`} className="card-link">
    <section className="card_foodtruck">
      <img 
        className="card_foodtruck_img"
        src={pictureURL} 
        // src={thumbnail} 
        // alt={title}  
      />
      <div className="card_foodtruck_content">
        <p className="card_foodtruck_content_title">{name}</p>
        <div className="card_foodtruck_content_subtitle">
          <p className="card_foodtruck_content_category">{categoryName}</p>
          <p className="card_foodtruck_content_rating"></p>
        </div>
        <div className="card_foodtruck_content_description">
          <CgPin />
          <p>{location}</p> 
        </div>
      </div>
    </section>
  </Link>

);
}
// Card.propTypes = {
//   thumbnail: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   difficulty: PropTypes.string.isRequired,
//   slug: PropTypes.string.isRequired,
// };
export default Card;
