import logo from 'src/assets/images/logo.png';
import loginLogo from 'src/assets/images/logo-login.png';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import ajax from 'src/components/middlewares';

import * as Icon from 'react-feather';


import './style.scss';


const Header = ({
  // console.log('blabla');
}) => {

  const registered = useSelector(state => state.register.registered);
  const logged = useSelector(state => state.user.logged);
  const nickname = useSelector(state => state.user.nickname);
  // localStorage.setItem('nickname', JSON.stringify(response.data.data.nickname));
  // const nickname = JSON.parse(localStorage.getItem('nickname'));
  // console.log(nickname);
  
function handleClick() {
  // console.log('j\'écoute');
}

 return (

  <header className="header">
    <section className="header_left">
      <NavLink 
        className='logo'
        to="/"
        exact
        onClick={handleClick}
        >
        {/* <div className='logo_img'> 
          <img src={logo} alt="Logo FindMyTruck"/>
        </div> */}

        <div className='logo_title'> 
          <h1>FIND MY TRUCK</h1>
        </div>
      </NavLink>
    </section>
    <section className="header_right">      
      {!logged && (
        <NavLink
          className="header_right_connexion"
          to="/connexion"
          exact
          onClick={handleClick}
          >
          <div className="header_right_connexion_text">
            <p>Connexion</p>
          </div>
        </NavLink>
      )}
    
    {!registered && !logged &&(
      <NavLink
        className="inscription"
        to="/inscription"
        exact
        onClick={handleClick}
        >
        <div className="inscription_text">
        <p>Inscription</p>
        </div>
      </NavLink> 
    )}
    {logged===true && (
      <>
        <div>Bonjour {nickname}</div>
        <NavLink
          className='login' 
          to="/profil"
          exact
          >
          <button className='login_img'>
            <img src={loginLogo} alt="logoLogin"/>
          </button>
        </NavLink> 
      </>
    )}
    </section>
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
