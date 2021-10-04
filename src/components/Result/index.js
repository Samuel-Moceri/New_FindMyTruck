import PropTypes from 'prop-types';

import SearchBar from 'src/components/SearchBar';
import Card from 'src/components/Card';

import './style.scss';
import Map from 'src/components/Map';
import { useSelector } from 'react-redux';



const Result = () => {
  
  const foodtrucks = useSelector(state => state.foodtruck.list);
  console.log(foodtrucks);

  return (
<>
  
    <SearchBar />
    <p className="result_title">Résultats de votre recherche</p>
    
  
  <div className="result">

    <div className="result_map">
    <Map />
    </div>

    <div className="result_cards">
    {foodtrucks.map((foodtruck) => (
          <Card key={foodtruck.id} {...foodtruck}/>
        ))}
    </div>
  </div>
</>
);
}



export default Result;

