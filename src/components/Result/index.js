import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React , { useState } from 'react';

import SearchBar from 'src/components/SearchBar';
import Foodtruck from 'src/components/Foodtruck';
import Card from 'src/components/Card';
import Map from 'src/components/Map';

import Fake_Card from 'src/components/Card/fake_card';
import Modal from 'src/components/Modal';
import MarkerPin from '../MarkerPin';


import { AiOutlineCloseCircle } from "react-icons/ai";


// import './style.scss';


const Result = ({
  id,
  name,
  }) => {

  const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';


  const foodtrucks = useSelector(state => state.foodtruck.list);
  console.log(foodtrucks);

  // MODAL //
  const [openModal, setOpenModal] = useState (false);
  const showModal = id => {
    setOpenModal(true)
  };
  const hideModal = () => {
    setOpenModal(false)
  };
  // /MODAL //


  return (
<>
  
    {/* <SearchBar /> */}
    <p className="result_title">Résultats de votre recherche</p>
  
  <div className="result">

    <div className="result_map">
      <Map />
    </div>

    <div 
      className="result_cards" 
      onClick={() => showModal()}>
        {foodtrucks.map((foodtruck) => (<Card key={foodtruck.id} {...foodtruck}/>))}

      <Fake_Card />
    </div>
        
        {/* // MODAL // */}
        <Modal className="modalMain" showModal= {openModal} hideModal={hideModal}>
          <div className="modalHeader">
              NOMDUFOODTRUCK
          </div>
          <div className="modalBody">
              DESCRIPTION
          </div>
          <div className="modalFooter">
            <div className="modalBtn"> <AiOutlineCloseCircle /></div>
          </div>
        </Modal>

        {/* {foodtrucks.map((foodtruck) => (<Modal key={foodtruck.id} {...foodtruck}/>))} */}


        {/* <div className="result_modal">
        {foodtrucks.map((foodtruck) => (<Modal key={foodtruck.id} {...foodtruck}/>))}
        </div> */}

        {/* // /MODAL // */}


    

  </div>

</>
);
}

export default Result;
