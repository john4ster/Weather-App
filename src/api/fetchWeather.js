const { REACT_APP_MY_ENV } = process.env;

async function fetchWeather(city) {

  const apiKey = '12345'; //Your api key here, application will not work without it
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=imperial'; //Api call
  
  const response = await fetch(url); //Make the api call
  const data = await response.json(); //Get the json

  return data; //Return the data as a promise
}

export {fetchWeather};