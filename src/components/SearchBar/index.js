import './style.scss';

const SearchBar = () => {
  
  return (
  
  // SearchBar Zone
  <div className="searchBar">
    {/* Geolocate Zone */}
    <div className="searchBar_geolocate">
      <button>
        Where Am I ?
      </button>
    </div>
    {/* Search Text Zone */}
    <div className="searchBar_text">
      <input className="textArea"
      placeholder={"Chercher un Food Truck"}
      />
    </div>
    {/* Search Button Zone */}
    <div className="searchBar_button">
      <button>
        Search
      </button>
    </div>
  </div>
  );
}

export default SearchBar
