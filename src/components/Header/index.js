import logo from 'src/assets/images/logo.png';
import loginLogo from 'src/assets/images/logo-login.png';

import './styles.scss';

const Header = () => {


 return (
  <header className="header">
    <div>
      <a className='logo' href="">
        <div className='logo_img'> 
          <img src={logo} alt="Logo FindMyTruck"/>
        </div>
       
        <div className='logo_title'> 
          <h1>FIND MY TRUCK</h1>
        </div>
      </a>
    </div>

    <div className='login' >
      <button className='login_img'>
        <img src={loginLogo} alt="logo Login"/>
      </button>
    </div>
  </header>
 );
};
export default Header;
