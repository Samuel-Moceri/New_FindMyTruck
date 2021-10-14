import { useSelector } from 'react-redux';
import React  from 'react';

import Card from 'src/components/Card';
import Map from 'src/components/Map';
import Welcome from 'src/components/Welcome';


import useModal from "src/components/Modal/useModal";

import FMT_logo_full from 'src/assets/images/FMT_logo_full.png';






const Result = ({
  id,
  name,
}) => {
  
  const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';
  
  const foodtrucks = useSelector(state => state.foodtruck.list);

  const search = useSelector(state => state.foodtruck.search);


  // MODAL //
  const { isShowing: isModalShowed, toggle: toggleModal } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();
  // /MODAL //


  return (
    <>
    {search===false &&
      
      <Welcome />
    }

    {search===true &&

      <div className="result">

        <div className="result_map">
          <Map />
        </div>

        <div 
          className="result_cards" 
          >
            {foodtrucks.map((foodtruck) => (
              <Card key={foodtruck.id} {...foodtruck} />
            ))}

 
        </div>

            
      </div>

    }
    </>
  );
}

export default Result;
