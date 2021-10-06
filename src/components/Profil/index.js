import './style.scss';
import { NavLink } from 'react-router-dom';


/**
 * Composant to make our 'footer' with different 'li' and links
 */
 const Profil = () => {

  const data = JSON.parse(sessionStorage.getItem('key'));
  console.log(data);
  const informations = data.data;
  

  return (

<div>On est sur ton profil {informations.email}</div>
  );
};

export default Profil;
