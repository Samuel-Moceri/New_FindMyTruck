import {CgPin} from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import './style.scss';

const Foodtruck = ()  => {
      
    const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';

    const foodtrucks = useSelector(state => state.foodtruck.list);
    const id = useSelector(state=> state.foodtruck.id)
  
    const dispatch = useDispatch();
    // const categoryName = category.name
    // const pictureURL = baseURL+`${picture}`;

    // useEffect(() => {
    //   dispatch({
    //     type: 'LOAD_FOOD_TRUCK_DETAIL',
    //     id: id
    //   })
    // }, []);
  
    return(
    
    <section className="card_foodtruck">
      <img 
        // className="card_foodtruck_img"
        // src={pictureURL} 
        // src={thumbnail} 
        // alt={title}  
      />
      <div className="card_foodtruck_content">
        <p className="card_foodtruck_content_title">
          NOM
        </p>
        <div className="card_foodtruck_content_subtitle">
          <p className="card_foodtruck_content_category">{foodtrucks[id].name}</p>
          <p className="card_foodtruck_content_rating"></p>
        </div>
        <div className="card_foodtruck_content_description">
          <CgPin />
          <p>A</p> 
        </div>
        {/* <Link to={`/foodtruck/${name}`} className="card-link">Voir le FT</Link> */}
      </div>
    </section>
  
  );
  };


export default Foodtruck;

