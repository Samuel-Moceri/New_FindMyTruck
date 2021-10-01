import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useRef, useCallback, useEffect } from 'react'
import Result from 'src/components/Result';
import { NavLink } from 'react-router-dom';


import * as Icon from 'react-feather';


const SearchBar = () => {

  const address = useSelector(state => state.user.address);
  const dispatch = useDispatch();

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
 

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FETCH_FOODTRUCK'
    })
  }

  const handleChange = (event) => {
    dispatch({
      type: 'CHANGE_VALUE',
      key: 'address',
      value: event.target.value
    })
  }
  
  return (
  <>
  {/* SearchBar Zone */} 
    
    <form className="searchBar_form" onSubmit={handleSubmit} >
      <input type="text" onChange={handleChange} value={address}/>
      <button>Rechercher à proximité</button>

    </form>
  </>
  );
}

export default SearchBar
