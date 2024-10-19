import '../styles/SearchBar.css'

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
        <button onClick={searchLocation}>🔍</button> {/* You can use an icon instead of text */}
      </div>
    </div>
  )
}
export default Search;