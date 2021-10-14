import FMT_logo_full from 'src/assets/images/FMT_logo_full.png';


const Welcome = () => {


  return(

    <>
      <div className="welcome">
        <img className='welcome_logo_img' src={FMT_logo_full} alt="Logo FindMyTruckFull"/>
        <div className="warning">Bienvenue sur Find My Truck ! </div>
        <div className="warning">Actuellement, il n'y a aucun FoodTruck autour de toi</div>
        <div className="warning">Acceptes la géolocalisation si tu veux trouver les meilleurs FoodTrucks à proximité</div>
        <div className="warning">Sinon n'hésites pas à faire une recherche dans une ville de ton choix</div>
      </div>
    </>
  );
};

export default Welcome;
