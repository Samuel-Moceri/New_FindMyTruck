// import './style.scss';

/* global document */
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useState, useRef, useCallback, Component } from 'react'
import { useSelector } from 'react-redux';

import MapGL, {GeolocateControl, NavigationControl, Marker} from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { FaShippingFast } from "react-icons/fa";
import Fake_Marker from './Fake_Marker'
import MarkerPin from '../MarkerPin'


const Map = ({
  props,
  id,
  latitude,
  longitude,
}) => {
    
  const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';

  const lat = Number(latitude);
  const lng = Number(longitude);
  

  //Map generator
  const [viewport, setViewport] = useState({

    
    // lat & long : starting position on the map (O'Clock's office)
    latitude: 47.7,
    longitude: -1.65,

    // W&H are define in style.scss (.map), map take 100% of this area
    width: "100%",
    height: "100%",
    // starting zoom level
    zoom: 15
    ,
  });




  //TEST //
  const foodtrucks = useSelector(state => state.foodtruck.list);
  console.log(foodtrucks);


  // /TEST //


  // Create a constante with an initial value & return a reference (ref)
  const mapRef = useRef();
  // Send another version of the constant ONLY if something has change
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // Mapbox token to connect with
  const mapboxApiKey = 'pk.eyJ1Ijoid2VpcmRvZm10IiwiYSI6ImNrdWduNXJubTA0Zzgycm96dnV0ejZuOGwifQ.qGNN7kWQ3ot3G8aj1Oa9ew'



  // Mapbox style from : https://www.mapbox.com/gallery/
  const mapboxStyle = "mapbox://styles/weirdofmt/cktvjc1ae2bk017okiy41geat"

  // Search's results change viewport -> newViewport
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      // Transfert from origin point to search's result point with custom duration (ms)
      const geocoderDefaultOverrides = { transitionDuration: 3000 }; 

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );

    // LA C'EST UN TEST DE STYLE DIRECT DANS LE CODE SUR LE BOUTTON DE GEOLOCALSATION
    const geolocateControlStyle= {
      margin:'4.2rem 0 0 .5rem',
    };
    const navControlStyle= {
      margin:'.5rem',
    };


  return (
    <>
  

    <div className="geocode" >
      {/* map display */}


      <MapGL
        className="map_area"
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={mapboxApiKey}
        mapStyle={mapboxStyle}
        onViewportChange={handleViewportChange}
        lat= {lat}
        lng= {lng}
      >

        {/* geolocate button display */}
        <GeolocateControl
          style={geolocateControlStyle}
          className="geolocate_area"
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={false}
          showUserHeading={false}
          auto 
          // onGeolocate= {GeolocationCoordinates}
        />

        {/* zoom in & out + compas button display */}
        <NavigationControl style={navControlStyle} />

        {/* Searchbar geocoder display */}
        {/* <Geocoder
          className="geocode_area"
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={mapboxApiKey}

        /> */}

        {/* // MARKER // */}
        {foodtrucks.map((foodtruck) => (
          <MarkerPin 
          key={foodtruck.id}

          // Pas obligé de les renseigner mais pour l'instant je garde ça là pour plus tard
          latitude={lat} 
          longitude={lng}
          //
          
          {...foodtruck}/>))}
        {/* // /MARKER // */}
        
        {/* <Fake_Marker /> */}

      </MapGL>
    </div>
    </>
  );
  
}

export default Map
