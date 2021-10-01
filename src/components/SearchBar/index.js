import './style.scss';
import { useDispatch } from 'react-redux';
import * as Icon from 'react-feather';

const SearchBar = () => {

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'FETCH_FOODTRUCK'
    })
  }
  return (
  <>
  {/* SearchBar Zone */}
  <form action="submit" onSubmit={handleSubmit} >
  <input type="submit"/>
  </form>

    <div className="searchBar">
    <button className="searchBar_geolocate">
    <Icon.MapPin />      
    </button>

    <form className="searchBar_form" >

        {/* Search Text Zone */}
        <div className="searchBar_text">
          <input type="text" required="required"/>
          <span>Chercher un foodtruck</span>
        </div>
        {/* Search Button Zone */}
        <button className="searchBar_geolocate">
        <Icon.Search />      
        </button>

    </form>
  </div>
  </>
  );
}

export default SearchBar
