const axios =  require('axios');

// api.openweathermap.org / data / 2.5 / forecast ? q = { city name},{ country code}APPID= { apiKey }

const apiKey = 'ea54078d815d4074962943a634030ac8'


const url = 'http://api.openweathermap.org/data/2.5/forecast?q=sanjose&APPID=ea54078d815d4074962943a634030ac8'

function get(){
 return axios.get(url)
    .then(function(response){
        return response;
    })
// console.log('greed')
}

  module.exports = get;

  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={ea54078d815d4074962943a634030ac8}