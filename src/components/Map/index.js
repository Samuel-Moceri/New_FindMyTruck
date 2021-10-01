import './style.scss';

/* global document */
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import MapGL, {GeolocateControl} from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax


// import Test1 from './test1';


const Map = () => {

  //Map generator
  const [viewport, setViewport] = useState({
    // lat & long : starting position on the map (O'Clock's office)
    latitude: 48.8730929,
    longitude: 2.3165648,
    // W&H are define in style.scss (.map), map take 100% of this area
    width: "100%",
    height: "100%",
    // starting zoom level
    zoom: 15
    ,
  });

  // const mapContainer = useRef(null);
  // const map = useRef(null);
  // const [lat, setLat] = useState(48.8730929);
  // const [lng, setLng] = useState(2.3165648);
  // const [zoom, setZoom] = useState(15);


  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //   container: mapContainer.current,
  //   style: 'mapbox://styles/mapbox/streets-v11',
  //   center: [lng, lat],
  //   zoom: zoom
  //   });
  //   });

  //   useEffect(() => {
  //     if (!map.current) return; // wait for map to initialize
  //     map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     });
  //     });

  // TODO Comprendre ces 2 const
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  // Mapbox token to connect with
  const mapboxApiKey = 'pk.eyJ1Ijoid2VpcmRvZm10IiwiYSI6ImNrdG13ZjQxczBuY2gycW8zZzRpZ21kcHcifQ.vmpsgfGRZoOCrMXKWkRQCQ'

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
      margin:'1rem',
    };


  return (
    <>
    {/* <Test1 /> */}


    <div className="geocode" >
      {/* map display */}

      <MapGL
        className="map_area"
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={mapboxApiKey}
        mapStyle={mapboxStyle}
        onViewportChange={handleViewportChange}
      >

        {/* geolocate button display */}
        <GeolocateControl
          style={geolocateControlStyle}
          className="geolocate_area"
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
          showUserHeading={true}
          position="top-right" 
        />

        {/* Searchbar geocoder display */}
        <Geocoder
          className="geocode_area"
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={mapboxApiKey}
          position="top-right"
        />
      
      </MapGL>
    </div>
    </>
  );
  
}

export default Map
