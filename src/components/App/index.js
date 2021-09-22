// == Import
import './style.scss';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';

// == Composant
// We call the views to display them on the page
const App = () => (
  <div className="app">
    <Header />
    <Home />    
    <Footer />    
  </div>
);

// == Export
export default App;
