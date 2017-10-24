const axios =  require('axios');

// api.openweathermap.org / data / 2.5 / forecast ? q = { city name},{ country code}APPID= { apiKey }

const apiKey = 'ea54078d815d4074962943a634030ac8'
/*
with response return  data> list[]> main-weather
function(response) 
  return object with data
  . response.data.list.main
  .response .data.list.weather
sortData(response){
  return{main: response}
}


*/
function sortData(response){
  const obj = { main: response.data.list,
                // weather: response.data.list.weather
              }
  return obj

}
function currentDay (response){
  const obj = {
    location: response.data.name,
    status: response.data.weather[0].main,
    minTemp: response.data.main.temp_min,
    maxTemp: response.data.main.temp_max,
    humidity: response.data.main.humidity,
  }

  return obj;
}


function get(city){
const greed = 'sanjose' //test 
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8bc3501661eec87a72083fb24929095f`
  const url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=8bc3501661eec87a72083fb24929095f`
 return axios.get(url1)
    // .then(function(response){
    //     return response;
    // })
    .then(currentDay)

}

  module.exports = get;

  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={ea54078d815d4074962943a634030ac8}