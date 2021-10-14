import { useSelector } from 'react-redux';

import {Marker} from 'react-map-gl'
import { FaShippingFast } from "react-icons/fa";


const Fake_Marker = () => {

  const foodtrucks = useSelector(state => state.foodtruck.list);

    
  return (
    <>
      {foodtrucks.map((foodtruck) => (<Card key={foodtruck.id} {...foodtruck}/>))}


      <Marker 
        latitude={42.694163} 
        longitude={2.769593} 
        offsetLeft={-20} 
        offsetTop={-10}
      >
        <div className="map_marker" ><FaShippingFast /></div>
      </Marker>

      <Marker 
        latitude={42.703286} 
        longitude={2.782426} 
        offsetLeft={-20} 
        offsetTop={-10}
      >
      <div className="map_marker" ><FaShippingFast /></div>
      </Marker>

      <Marker 
        latitude={42.697692} 
        longitude={2.730319} 
        offsetLeft={-20} 
        offsetTop={-10}
      >
      <div className="map_marker" ><FaShippingFast /></div>
      </Marker> 
    </>
  );
};

export default Fake_Marker
