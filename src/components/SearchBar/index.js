import './style.scss';
import { useDispatch } from 'react-redux';
import React, { useState, useRef, useCallback } from 'react'
import Result from 'src/components/Result';
import { NavLink } from 'react-router-dom';


import * as Icon from 'react-feather';


const SearchBar = () => {

  // const getLocation = () => {
  //   if (!navigator.geolocation) {
  //     setStatus('Geolocation is not supported by your browser');
  //   } else {
  //     setStatus('Locating...');
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       setStatus(null);
  //       setLat(position.coords.latitude);
  //       console.log(position.coords.latitude);
  //       setLng(position.coords.longitude);
  //       console.log(position.coords.longitude);
        
  //     }, () => {
  //       setStatus('Unable to retrieve your location');
  //     });
  //   }
  // }

  // const [lat, setLat] = useState(null);
  // const [lng, setLng] = useState(null);
  // const [status, setStatus] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FETCH_FOODTRUCK'
    })
  }
  return (
  <>
  {/* SearchBar Zone */}
  <form action="submit" onSubmit={handleSubmit} >
  <input type="submit"/>
  </form>

    <div className="searchBar">

      <NavLink 
        to="/resultat"
        exact
      >
        <div 
          className="searchBar_geolocate" 
          onClick={getLocation} >
          <Icon.MapPin />
        </div>
        </NavLink>
    
    <form className="searchBar_form" >

        {/* Search Text Zone */}
        <div className="searchBar_text">
          <input type="text" required="required"/>
          <span>Chercher un foodtruck</span>
          <button onSubmit></button>
        </div>
        {/* Search Button Zone */}
        {/* <NavLink 
        to="/resultat"
        exact
      >
        <div 
          className="searchBar_geolocate" 
          onClick={getLocation} >
          <Icon.Search />
        </div>
        </NavLink> */}

    </form>
  </div>
  </>
  );
}

export default SearchBar
