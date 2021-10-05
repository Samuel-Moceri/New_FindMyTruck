import PropTypes from 'prop-types';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from 'src/components/SearchBar';
import Card from 'src/components/Card';
import Foodtruck from 'src/components/Foodtruck';

import './style.scss';
import Map from 'src/components/Map';



const Result = () => {
  const dispatch = useDispatch();
  const foodtrucks = useSelector(state => state.foodtruck.list);
  // console.log(foodtrucks);

  useEffect(() => {
    if (!navigator.geolocation) {
        console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            
        dispatch({
            type: 'SAVE_LAT_LNG',
            lat: position.coords.latitude,
            lon: position.coords.longitude
        })

        dispatch({
          type: 'FETCH_FOODTRUCK_ON_LOAD',
        })
    }, () => {
      console.log('Unable to retrieve your location');
    });
  }
}, []);

  return (
<>
    <SearchBar />
    <p className="result_title">Résultats de votre recherche pour : </p>
  
  <div className="result">

    <div className="result_map">
    {/* <Map /> */}
    </div>

    <div className="result_cards">
    {foodtrucks.map((foodtruck) => (
          <Card key={foodtruck.id} {...foodtruck}/>
          
        ))}
        
    </div>
  </div>
</>
);
}



export default Result;

