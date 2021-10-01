import { useSelector } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import Map from 'src/components/Map';

import './style.scss';

const Home = () => { 
  return (
    <div className="home">
    <SearchBar /> 
    <Map />
      
    </div>
  )
};

export default Home;
