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
    status: response.data.weather[0].description,
    minTemp: response.data.main.temp_min,
    maxTemp: response.data.main.temp_max,
    humidity: response.data.main.humidity,
  }

  return obj;
}

function currentWeek(response){
  const obj ={
    // location : response.data.city.name,
    days: [{status: response.data.list[0].weather[0].description,
            date: response.data.list[0].dt_txt,
            minTemp: response.data.list[0].main.temp_min,
            maxTemp: response.data.list[0].main.temp_max,
            humidity: response.data.list[0].main.humidity,
            location: response.data.city.name
            }, 
            {
            status: response.data.list[1].weather[0].description,
            date: response.data.list[1].dt_txt,
            minTemp: response.data.list[1].main.temp_min,
            maxTemp: response.data.list[1].main.temp_max,
            humidity: response.data.list[1].main.humidity,
            location: response.data.city.name
            },
            {
            status: response.data.list[9].weather[0].description,
            date: response.data.list[9].dt_txt,
            minTemp: response.data.list[9].main.temp_min,
            maxTemp: response.data.list[9].main.temp_max,
            humidity: response.data.list[9].main.humidity,
            location: response.data.city.name
            },
            {
            status: response.data.list[17].weather[0].description,
            date: response.data.list[17].dt_txt,
            minTemp: response.data.list[17].main.temp_min,
            maxTemp: response.data.list[17].main.temp_max,
            humidity: response.data.list[17].main.humidity,
            location: response.data.city.name
            },
            {
            status: response.data.list[25].weather[0].description,
            date: response.data.list[25].dt_txt,
            minTemp: response.data.list[25].main.temp_min,
            maxTemp: response.data.list[25].main.temp_max,
            humidity: response.data.list[25].main.humidity,
            location: response.data.city.name
            },
            {
            status: response.data.list[33].weather[0].description,
            date: response.data.list[33].dt_txt,
            minTemp: response.data.list[33].main.temp_min,
            maxTemp: response.data.list[33].main.temp_max,
            humidity: response.data.list[33].main.humidity,
            location: response.data.city.name}

          ],

  
  }

  return obj
}


function get(city){
const greed = 'sanjose' //test 
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=8bc3501661eec87a72083fb24929095f`
  const url1 = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=8bc3501661eec87a72083fb24929095f`
  return axios.get(url1)
    .then(currentDay)

}

function getWeek(city){
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&APPID=8bc3501661eec87a72083fb24929095f`

  return axios.get(url)
    .then(currentWeek)
  
}

function complie(city){
 
  return axios.all(
    [get(city),
    getWeek(city)])
      .then(function(data){
        const currentDay = data[0]
        const week = data[1]

        const weatherObj ={
          currentDay : currentDay,
          week : week
        }
        return weatherObj
        // return data
      })
    
}



  module.exports = complie;

  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={ea54078d815d4074962943a634030ac8}