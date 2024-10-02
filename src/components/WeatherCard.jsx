import React from 'react';

function WeatherCard({ data }) {
  if (!data || !data.main) {
    return <div>Loading or error occurred</div>; // Handle loading or error state
  }

  const { temp, feels_like, humidity } = data.main;
  const { name } = data;
  const weatherDescription = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
  const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="max-w-3xl mx-auto mt-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center items-center space-x-2">
        <h2 className="text-lg text-white">{Math.round(temp)}°C</h2>
        <img src={iconUrl} alt="weather icon" className="w-10 h-10" />
      </div>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {name} Weather
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{weatherDescription}</p>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Feels like {Math.round(feels_like)}°C. Humidity: {humidity}%.
      </p>
      <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        More weather details
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
      </a>
    </div>
  );
}

export default WeatherCard;
