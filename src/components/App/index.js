// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import './style.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import LoginForm from 'src/components/LoginForm';
import Contact from 'src/components/Contact';
import Team from 'src/components/Team';



// == Composant
function App() {

  const logged = useSelector(state => state.user.logged);
  const { pathname } = useLocation();
  // We use a hook to dispatch our action
  const dispatch = useDispatch();
  
  useEffect(() => { 
    // On emet donc l'action avec le type 'LOG_USER'
    dispatch({
      type: 'LOG_USER',
    });
  }, []);
 
// We call the views to display them on the page
return (
    <div className="app">
      <Header />
    {/* Switch allows you to link components with routes that you define */}
      <Switch>
      <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/equipe" exact component={Team} />
        <Route path="/connexion" exact component={LoginForm} />
        
        {/* {logged && (<Route path="/favoris" exact component={Fav} />)} */}
      </Switch>

      <Footer />
    </div>
  );
}

// == Export
export default App;


// https://reactrouter.com/web/api/Switch
