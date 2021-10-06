import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import SearchBar from 'src/components/SearchBar';
// import Foodtruck from 'src/components/Foodtruck';
import Card from 'src/components/Card';
import Map from 'src/components/Map';

import Fake_Card from 'src/components/Card/fake_card';


import {CgPin} from 'react-icons/cg';


import './style.scss';

const Result = () => {
  const dispatch = useDispatch();
  // const foodtrucks = useSelector(state => state.foodtruck.list);
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
  
    {/* <SearchBar /> */}
    <p className="result_title">Résultats de votre recherche</p>
  
  <div className="result">

    <div className="result_map">
      <Map />
    </div>

    <div className="result_cards">
      {foodtrucks.map((foodtruck) => (
        <Card key={foodtruck.id} {...foodtruck}/>
        ))}
        

        {/* <Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /><Fake_Card /> */}
    </div>

    

  </div>
      {/* {foodtrucks.map((foodtruck) => (
        <Foodtruck key={foodtruck.id} {...foodtruck}/>  
      ))} */}
</>
);
}

export default Result;
