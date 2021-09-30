import React, { useState, useRef, useCallback } from 'react'
import MapGL, {GeolocateControl} from 'react-map-gl'
// import Geocoder from 'react-map-gl-geocoder'

function Map() {

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

  // Mapbox token to connect with
  const mapboxApiKey = 'pk.eyJ1Ijoid2VpcmRvZm10IiwiYSI6ImNrdG13ZjQxczBuY2gycW8zZzRpZ21kcHcifQ.vmpsgfGRZoOCrMXKWkRQCQ'

  // Mapbox style from : https://www.mapbox.com/gallery/
  // Street style
     const mapboxStyle = "mapbox://styles/weirdofmt/ckturw5ff1kyt19mr3a2wjwqa"

     // Search's results change viewport -> newViewport
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      // Transfert from origin point to search's result point with custom duration (ms)
      const geocoderDefaultOverrides = { transitionDuration: 2000 }; 

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      });
    },
    []
  );
  // LA C'EST UN TEST DE STYLE DIRECT DANS LE CODE SUR LE BOUTTON DE GEOLOCALSATION
  const geolocateControlStyle= {
    position: 'fixed',
    left: '75px',
    top: '80px',
  };


  return (
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
          position="top-left"
        />
        {/* Searchbar geocoder display */}
        {/* <Geocoder
          className="geocode_area"
          mapRef={mapRef}
          onViewportChange={handleGeocoderViewportChange}
          mapboxApiAccessToken={mapboxApiKey}
          position="top-left"
        /> */}
      
      </MapGL>
    </div>
  );
}

export default Map
