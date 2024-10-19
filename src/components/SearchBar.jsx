import '../styles/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({location, setLocation, searchLocation}) => {
  return (
    <div className="search">
      <div className="input-container">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          // onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" 
        />
        <button onClick={searchLocation} className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  )
}

export default Search;
