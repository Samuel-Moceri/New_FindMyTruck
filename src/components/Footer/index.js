// import './style.scss';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


/**
 * Composant to make our 'footer' with different 'li' and links
 */
 const Footer = () => {

  // const role = useSelector(state=> state.user.roles);
  // console.log(role);

  return (

    <footer className="footer">
      <ul className="footer_list">
        <NavLink 
        to="/contact"
        exact
        >
          <li  className="footer_list_el"> Contact </li>
        </NavLink>

        <NavLink 
        to="/equipe"
        exact
        >
          <li  className="footer_list_el">FIND MY TRUCK - FOODTRUCK CONOISSEUR - EST. 2021</li>
        </NavLink>

        <NavLink 
        to="/mentions_legales"
        exact
        >
          <li  className="footer_list_el">
          Mentions légales
          </li>
        </NavLink>
      

      </ul>
    </footer>
  );
};

export default Footer;

{/* {role[0]==="ROLE_ADMIN" && 
  <li className="footer_list_el backoffice">
    <a href="http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public"
      target="_blank" >
        <a href="http://localhost:8080"
      target="_blank" >          
      BackOffice
    </a>
  </li>
}

{role[0]==="ROLE_MODO" &&
  <li className="footer_list_el backoffice">
    <a href="http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public"
      target="_blank" >
      <a href="http://localhost:8080"
      target="_blank" > 
      BackOffice
    </a>
  </li>
} */}
