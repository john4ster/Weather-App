async function fetchWeather(city, unit) {

  const apiKey = 'insertAPIKey'; //Put your api key here, application will not work without it
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=' + unit; //Api call
  
  const response = await fetch(url); //Make the api call
  const data = await response.json(); //Get the json

  return data; //Return the data as a promise
}

export {fetchWeather};