import { useSelector } from 'react-redux';
import SearchBar from 'src/components/SearchBar';

import './style.scss';

const Home = () => { 
  return (
    <div className="home">
    <SearchBar />   
    </div>
  )
};

export default Home;
