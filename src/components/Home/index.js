import { useSelector } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import Map from 'src/components/Map';
import Result from 'src/components/Result';


import './style.scss';

const Home = () => { 
  return (
    <div className="home">
    <SearchBar /> 
    <div className="test">
    {/* <Map /> */}
    </div>  
    </div>
  )
};

export default Home;
