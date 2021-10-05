import './style.scss';
import {CgPin} from 'react-icons/cg';


const Foodtruck = ({
    id,
    name,
    location,
    category,
    picture,
  }) => {
      
    const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  
    const categoryName = category.name
    const pictureURL = baseURL+`${picture}`;
  
    return(
    
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
        {/* <Link to={`/foodtruck/${name}`} className="card-link">Voir le FT</Link> */}
      </div>
    </section>
  
  );
  }


export default Foodtruck;

