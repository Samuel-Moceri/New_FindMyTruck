// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import './style.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import LoginForm from 'src/components/LoginForm';
import Register from 'src/components/Register';
import Contact from 'src/components/Contact';
import Team from 'src/components/Team';
import Legals from 'src/components/Legals';
import Profil from 'src/components/Profil';
import Result from 'src/components/Result';


// == Composant
function App() {
  const logged = useSelector(state => state.user.logged);

  const isLogged = useSelector(state => state.user.isLogged);
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
        <Route path="/mentions_legales" exact component={Legals} />
        <Route path="/connexion" exact component={LoginForm} />
        <Route path="/inscription" exact component={Register} />
        <Route path="/resultat" exact component={Result} />

        {logged && (<Route path="/profil" exact component={Profil} />)}

      </Switch>

      <Footer />
    </div>
  );
}

// == Export
export default App;


// https://reactrouter.com/web/api/Switch
