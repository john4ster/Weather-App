import React, { useState } from 'react';
import WeatherCard from './components/weatherCard';
import { fetchWeather } from './api/fetchWeather';

function App(){

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  //Get data from api using enter key
  const enterSearch = evt => {
    if (evt.key === 'Enter') {
      fetchWeather(city, 'imperial')
        .then((data) => {
          setWeather(data)
          setCity('');
        });
    }
  }

  //Get data from api using search button
  const search = () => {
    fetchWeather(city)
      .then((data) => {
        setWeather(data)
        setCity('');
      }); //Use the weather json returned
   }
  
  
  return(
  <main>
    <div className="app">
      <header>
        <h1 className="title">WeatherJS</h1>
      </header>
      <div className="search">
        <input className="searchBar" placeholder="Enter a city" onChange={e => setCity(e.target.value)} value={city} onKeyPress={enterSearch}></input>
        <button className="searchButton" onClick={search}>Search</button>
      </div>
      {(typeof weather.main != "undefined") ? ( //Only displays if weather.main is not undefined
      <WeatherCard city={weather.name} country={weather.sys.country} weather={weather.weather[0].main} temp={Math.round(weather.main.temp) + " °F"}/>
      ) : ('')}
    </div>
  </main>
  );
}

export default App;