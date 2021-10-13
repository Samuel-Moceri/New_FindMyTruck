// == Import
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { LOGIN } from '../../actions/users';

// import './style.scss';

import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import LoginForm from 'src/components/LoginForm';
import Register from 'src/components/Register';
import Contact from 'src/components/Contact';
import Team from 'src/components/Team';
import Legals from 'src/components/Legals';
import Profil from 'src/components/Profil';
import Error from 'src/components/Error';

// == Composant
function App() {
  const logged = useSelector(state => state.user.logged);
  const foodtruckList = useSelector((state) => state.foodtruck.list);

  // const isLogged = useSelector(state => state.user.isLogged);
  // const { pathname } = useLocation();
  // We use a hook to dispatch our action
  const dispatch = useDispatch();
  
  useEffect(() => { 
    const data = JSON.parse(sessionStorage.getItem('key'));
    // console.log(data);
    
    if(data){
      dispatch({
      type: LOGIN,
      logged: true,
      nickname: data.data.nickname,
      token: data.token,
      roles: data.data.roles,
      })
    }
  }, []);

  

// We call the views to display them on the page
return (
    <div className="app">
      <Header />
    {/* Switch allows you to link components with routes that you define */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/connexion" exact component={LoginForm} />
        <Route path="/inscription" exact component={Register} />
        {logged && (<Route path="/profil" exact component={Profil} />)}

        {/* <Route path="/resultat" exact component={Result} /> */}

        {/* {foodtruckList.map((foodtruck) => (
          <Route
          key={foodtruck.id}
          path={`/foodtruck/${foodtruck.slug}`}
          exact
          component={Foodtruck}
          />
        ))} */}

        <Route path="/contact" exact component={Contact} />
        <Route path="/equipe" exact component={Team} />
        <Route path="/mentions_legales" exact component={Legals} />
        <Route path="/404" exact component={Error} />
        <Route path="/aze" exact component={Error} />

      </Switch>

      <Footer />
    </div>
  );
}

// == Export
export default App;
