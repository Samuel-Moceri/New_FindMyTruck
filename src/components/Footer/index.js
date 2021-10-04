import './style.scss';
import { NavLink } from 'react-router-dom';


/**
 * Composant to make our 'footer' with different 'li' and links
 */
 const Footer = () => {

  return (

    <footer className="footer">
      <ul className="footer_list">
        <NavLink 
        to="/contact"
        exact
        >
          <li  className="footer_list_el">Contact</li>
        </NavLink>
        <NavLink 
        to="/foodtruck"
        exact
        >
          <li  className="footer_list_el">FOODTRUCKMONREUF</li>
        </NavLink>

        <NavLink 
        to="/equipe"
        exact
        >
          <li  className="footer_list_el">Find My Truck - since 2021</li>
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
