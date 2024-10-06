import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

import './App.css'
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [position, setPosition] = useState({ latitude: null, longitude: null })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const api_key = '7b7dd31d7ed32af6f67b262f117e06db';

  useEffect(() => {
    const handleSuccess = ({ coords: { latitude, longitude } }) => {
      setPosition({ latitude, longitude });
    };

    const handleError = () => {
      console.error("Geolocation is not available in your browser.");
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      handleError();
    }
  }, []);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}&units=metric`

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (position.latitude && position.longitude) {
        try {
          setLoading(true);
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${api_key}&units=metric`;
          const response = await axios.get(url);
          setData(response.data);
          setError('');
        } catch (err) {
          setError('Failed to fetch weather data. Please try again.');
          console.error('Error fetching weather data:', err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchWeatherData();
  }, [position, api_key]);

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      }).catch((err) => {
        console.log(err.response.data.message)
        setError(err.response.data.message)
      })

      setLocation('')
    }
  }

  const getIconUrl = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  console.log('Error', error)

  return (
    <div className="app">
      <Search location={location} setLocation={setLocation} searchLocation={searchLocation} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <ErrorMessage message={error} />
      ) : data ? (
        <WeatherCard data={data} getIconUrl={getIconUrl} />
      ) : null}
    </div>
  );
}

export default App;
