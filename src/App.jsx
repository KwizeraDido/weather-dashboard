import React, { useState } from 'react'
import axios from 'axios'
import Search from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

import './App.css'
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const api_key = '7b7dd31d7ed32af6f67b262f117e06db';

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="app">
      <Search location={location} setLocation={setLocation} searchLocation={searchLocation} />
      {data && data.main && data.weather ? (
        <WeatherCard data={data} getIconUrl={getIconUrl} />
      ) : <ErrorMessage />}
    </div>
  );
}

export default App;
