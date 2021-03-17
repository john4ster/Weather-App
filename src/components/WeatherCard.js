import React from 'react';
import '../App.css';

function WeatherCard({city, country, weather, temp}) {
  return(
    <div className="weatherCard">
      <h1 className="city">{city}, {country}</h1>
      <h3 className="temp">{temp}</h3>
      <h3 className= "weather">{weather}</h3>
    </div>
  );
}

export default WeatherCard;
