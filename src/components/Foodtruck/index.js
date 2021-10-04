import React from 'react';
import {CgPin } from "react-icons/cg";
import { useSelector } from 'react-redux';

import './style.scss';

const Foodtruck = () => {
  
    const foodtrucks = useSelector(state => state.foodtruck.list);
    console.log(foodtrucks[0].name);
    // console.log(foodtrucks[foodtruckID].name);
 
    // const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  
    // const categoryName = category.name;
    // const pictureURL = baseURL+`${picture}`;
    
    return(
    <section className="page_foodtruck">
      <img 
        className="page_foodtruck_img"
        // src={pictureURL} 
        // src={thumbnail} 
        // alt={title}  
      />
      <div className="page_foodtruck_content">
        <p className="page_foodtruck_content_title">{foodtrucks.name}</p>
        <div className="page_foodtruck_content_subtitle">
          {/* <p className="page_foodtruck_content_category">{foodtrucks[0].location}</p> */}
          <p className="page_foodtruck_content_rating"></p>
        </div>
        <div className="page_foodtruck_content_description">
          <CgPin />
          {/* <p>{location}</p>  */}
        </div>
      </div>
    </section>
  
  );
  }


export default Foodtruck;

