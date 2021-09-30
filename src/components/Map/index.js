import './style.scss';

/* global document */
import * as React from 'react';
import {useState, useRef, useCallback } from 'react';
import MapGL, {GeolocateControl} from 'react-map-gl';



// Mapbox token to connect with
const mapboxApiKey = 'pk.eyJ1Ijoid2VpcmRvZm10IiwiYSI6ImNrdG13ZjQxczBuY2gycW8zZzRpZ21kcHcifQ.vmpsgfGRZoOCrMXKWkRQCQ'

// Mapbox style from : https://www.mapbox.com/gallery/
const mapboxStyle = "mapbox://styles/weirdofmt/cktvjc1ae2bk017okiy41geat"


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

  // TODO Comprendre ces 2 const
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

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

  const geolocateControlStyle= {
    margin: '1rem',

  };

  return (
    <div className="geocode" >
      {/* map display */}
      <MapGL
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
          onViewportChange={handleGeocoderViewportChange}
          trackUserLocation={true}
          showUserHeading={true}
          position="top-left"
        />

      </MapGL>
    </div>
  );
  
}

export default Map
