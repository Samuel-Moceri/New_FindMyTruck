import React from 'react';


import {Marker} from 'react-map-gl'
import { FaShippingFast } from "react-icons/fa";


const MarkerPin = ({
  id,
  latitude,
  longitude,
}) => {
    
  const baseURL = 'http://arnaud-cousin.vpnuser.lan/projet-find-my-truck/findmytruck/public';
  // const baseURL = 'http://ec2-18-205-163-149.compute-1.amazonaws.com';

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
