import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import React , { useState } from 'react';

import SearchBar from 'src/components/SearchBar';
import Foodtruck from 'src/components/Foodtruck';
import Card from 'src/components/Card';
import Map from 'src/components/Map';

import Fake_Card from 'src/components/Card/fake_card';
import Modal from 'src/components/Modal';
import useModal from "src/components/Modal/useModal";

import MarkerPin from '../MarkerPin';




// import './style.scss';


const Result = ({
  id,
  name,
  }) => {

  const baseURL = 'http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public';


  const foodtrucks = useSelector(state => state.foodtruck.list);
  // console.log(foodtrucks);

  // MODAL //
    const { isShowing: isModalShowed, toggle: toggleModal } = useModal();
  const {
    isShowing: isRegistrationFormShowed,
    toggle: toggleRegistrationForm
  } = useModal();
  // /MODAL //


  return (
    <>
      
        {/* <SearchBar /> */}
        {/* <p className="result_title">Résultats de votre recherche</p> */}
      
      <div className="result">

        <div className="result_map">
          <Map />
        </div>

        <div 
          className="result_cards" 
          onClick={toggleModal}
          >
            {foodtrucks.map((foodtruck) => (<Card key={foodtruck.id} {...foodtruck} />))}

          <Fake_Card />
        </div>
            
            {/* // MODAL // */}
            <Modal
              isShowing={isModalShowed}
              hide={toggleModal}
              name="NOM DU FOODTRUCK"
            >
              <form>
                <div className="form-group">
                  <div type="text" placeholder="FOODTRUCK">CATEGORIE</div>
                </div>
                <div className="form-group">
                  <div type="text" placeholder="FOODTRUCK">ADRESSE</div>
                </div>
              </form>
            </Modal>
            {/* // /MODAL // */}
            
      </div>

    </>
  );
}

export default Result;
