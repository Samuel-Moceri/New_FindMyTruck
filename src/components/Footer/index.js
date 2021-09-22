import './style.scss';

/**
 * Composant to make our 'footer' with different 'li' and links
 */
const Footer = () => (
  <div className="footer">
    <ul className="footer_list">
      <li  className="footer_list_el"><a href="">Contact</a> </li>
      <li className="footer_list_el"><a href="">Find My Truck - Since 2021</a></li>
      <li className="footer_list_el"><a href="">Mentions légales</a></li>
    </ul>
  </div>
);

export default Footer;
