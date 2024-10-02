import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const api_key = '7b7dd31d7ed32af6f67b262f117e06db';
  const [city, setCity] = useState('');
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); // Change to null for clearer loading/error handling
  const [error, setError] = useState(null); // State for error handling

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const endpoint = city
          ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
          : `https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&appid=${api_key}&units=metric`;

        const { data: response } = await axios.get(endpoint);
        setData(response);
      } catch (error) {
        setError("Failed to fetch weather data.");
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (position.latitude && position.longitude || city) {
      fetchData();
    }
  }, [position, city]);

  return (
    <>
      <SearchBar city={city} setCity={setCity} />
      {loading && <p>Loading...</p>} {/* Show loading state */}
      {error ? <ErrorMessage message={error} /> : data && <WeatherCard className='background' data={data} />}
    </>
  );
}

export default App;
