import React, { useRef, useEffect, useState, useCallback } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import './style.scss';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';





import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
 


const Test1 = () => {

  mapboxgl.accessToken = 'pk.eyJ1Ijoid2VpcmRvZm10IiwiYSI6ImNrdG13ZjQxczBuY2gycW8zZzRpZ21kcHcifQ.vmpsgfGRZoOCrMXKWkRQCQ';

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(48.8730929);
  const [lng, setLng] = useState(2.3165648);
  const [zoom, setZoom] = useState(15);


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });

    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      });
      });

    return (
      <>
      <div className="infobar">
        Longitude: {lng} | Latitude: {lat}
      </div>
      <div ref={mapContainer} className="map-container" />

      </>
      );
}

export default Test1
