// == Import
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './style.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';




function App() {

  const { pathname } = useLocation();
 

// == Composant
// We call the views to display them on the page
return (
    <div className="app">
      <Header />
    {/* Switch allows you to link components with routes that you define */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/connexion" exact component={Login} />
        {/* {logged && (<Route path="/favoris" exact component={Fav} />)} */}
      </Switch>

      <Footer />
    </div>
  );
}

// == Export
export default App;


// https://reactrouter.com/web/api/Switch
