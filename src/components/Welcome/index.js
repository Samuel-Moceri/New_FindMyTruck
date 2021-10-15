import FMT_logo_full from 'src/assets/images/FMT_logo_full.png';
import FMT_logo_full_blue from 'src/assets/images/FMT_logo_new_blue.png';

import { MdLocationOn } from "react-icons/md";


const Welcome = () => {


  return(

    <>
      <div className="welcome">
        <div className="welcome_logo_txt_01">Bienvenue sur Find My Truck ! </div>
        {/* <div className="welcome_logo_txt_01_5">Le seul site (fonctionnel) de recherche de foodtrucks </div> */}
        <img className='welcome_logo_img' src={FMT_logo_full_blue} alt="Logo FindMyTruckFull"/>
        <div className="welcome_logo_txt_02">Actuellement, il n'y a aucun FoodTruck autour de toi</div>
        <div className="welcome_logo_txt_03">Si ce n'est pas déjà fait, accepte la géolocalisation <MdLocationOn /> si tu veux trouver les meilleurs FoodTrucks à proximité</div>
        <div className="welcome_logo_txt_04">Sinon n'hésites pas à faire une recherche dans une ville de ton choix</div>
      </div>
    </>
  );
};

export default Welcome;
