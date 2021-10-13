import React from 'react';


import {Marker} from 'react-map-gl'
import { FaShippingFast } from "react-icons/fa";


const MarkerPin = ({
  id,
  latitude,
  longitude,
}) => {
    
  // const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  const baseURL = 'http://localhost:8080';

  const lat = Number(latitude);
  const lng = Number(longitude);


  return(
    <>
      <Marker 
        latitude={lat} 
        longitude={lng} 
      >
        <div className="map_marker" ><FaShippingFast /></div>
      </Marker>
</>


);
}


export default MarkerPin;
