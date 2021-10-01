import PropTypes from 'prop-types';

import SearchBar from 'src/components/SearchBar';
import Card from 'src/components/Card';

import './style.scss';



const Result = () => {
  


  return (
<>
  <div 
    className="result" 
    // onLoad={getLocation}
  >
    <SearchBar />
    <div className="result_cards">RESULTATS DE LA RECHERCHE
    <Card />
    </div>
  </div>
</>
);
}



export default Result;

