// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Home from 'src/components/Home';



// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Home />
  </div>
);

// == Export
export default App;
