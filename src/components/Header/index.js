import logo from 'src/assets/images/logo.png';
import loginLogo from 'src/assets/images/logo-login.png';
import { NavLink } from 'react-router-dom';
// import ajax from 'src/components/middlewares';

import './style.scss';


const Header = () => {

function handleClick() {
  console.log('j\'écoute');
}

 return (
  <header className="header">
    <NavLink 
      className='logo'
      to="/"
      exact
      onClick={handleClick}
      >
      <div className='logo_img'> 
        <img src={logo} alt="Logo FindMyTruck"/>
      </div>

      <div className='logo_title'> 
        <h1>FIND MY TRUCK</h1>
      </div>
    </NavLink>
    
    <NavLink
       className='login' 
       to="/connexion"
       exact
       >
      <button className='login_img'>
        <img src={loginLogo} alt="logoLogin"/>
      </button>
      </NavLink>
  </header>
 );
};

export default Header;


{/* <NavLink
  className="menu-link"
  activeClassName="menu-link--active"
  to="/"
  exact
> */}
