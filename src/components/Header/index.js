import { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import ajax from 'src/components/middlewares';
import { FiUser } from 'react-icons/fi';
import { MdExitToApp, MdOutlineAdminPanelSettings } from 'react-icons/md';


import FMT_logo from 'src/assets/images/FMT_logo_clean_01.png';
import FMT_logo_responsive from 'src/assets/images/FMT_logo.png';


const Header = ({}) => {

  const registered = useSelector(state => state.register.registered);
  const logged = useSelector(state => state.user.logged);
  const nickname = useSelector(state => state.user.nickname);
  const logout= useSelector(state=> state.user.logout);
  const role= useSelector(state=> state.user.roles);


  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'LOGOUT',
      logout: true,
    })
    sessionStorage.clear();
    window.location.reload();
  }

 return (
  <>
    {logout===true && 
      <Redirect to="/" />
    }

    <header className="header">
      <section className="header_left">
        <NavLink 
          className='logo'
          to="/"
          exact
          >
          <div className='logo'> 
            <img className='logo_img' src={FMT_logo} alt="Logo FindMyTruck"/>

          </div>
            <img className='logo_img_responsive' src={FMT_logo_responsive} alt="Logo FindMyTruck"/>
        </NavLink>
      </section>

      <section className="header_right">      
        {!logged && (
          <NavLink
            className="header_right_connexion"
            to="/connexion"
            exact
            >
            <div className="header_right_connexion_text">
              <p>Connexion</p>
            </div>
          </NavLink>
        )}
      
        {!registered && !logged &&(
          <NavLink
            className="header_right_inscription"
            to="/inscription"
            exact
            >
            <div className="header_right_inscription_text">
            <p>Inscription</p>
            </div>
          </NavLink> 
        )}

        {logged===true && (
        <>
          <div className="header_right_logged">
            <div className="header_right_logged_hello">Bonjour <span className="header_right_logged_hello_nickname">{nickname}</span> !</div>

            <form  onSubmit={handleSubmit} className="header_right_link_logged_logout" >
              <button  type="submit" className="header_right_link_logged_logout_button" value="Deconnexion"><MdExitToApp /> </button>
            </form>

            <NavLink
              className='header_right_link' 
              to="/profil"
              exact
              >
              <button className='header_right_link_logged_icon'>
                <FiUser />      
              </button>
            </NavLink> 
          
            {( role !== undefined && (role[0]==="ROLE_ADMIN" || role[0]==="ROLE_MODO" )) &&
              <button className='header_right_link_backoffice'  >
                <a href="http://julien-bonnaud.vpnuser.lan/Sz-Apo/projet-find-my-truck/findmytruck/public"
                  target="_blank" >
                  <MdOutlineAdminPanelSettings />
                </a>
              </button>
            }
          </div>
        </>        
        )}
      </section>

    </header>
  </>
 );
};

export default Header;
