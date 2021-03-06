const React = require('react');
const axios = require('axios');
const api = require('../components/api')
const queryString = require('query-string')
const Link = require('react-router-dom').Link;
const moment = require('moment');
const WeatherHead = require('../components/WeatherHead');
const date = new Date();
  date.setHours(0,0,0,0);
const betterWay = JSON.stringify(date).slice(1,11)

class CurrentForcast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: 'pic',
      location: null,
      status: null,
      minTemp: null,
      maxTemp: null,
      humidity: null,
    }
    
    this.searchWeather = this.searchWeather.bind(this);
  }

  searchWeather() {
    // const city = queryString.parse(this.props.location.search)
    // const city1 = city.location
    // console.log(city)
    // console.log(city1)
    const city1 = this.props.search.query.location
    api(city1)
      .then((response) => {
        console.log(response.currentDay);
        return response;
        // console.table('log',response)
      })
      .then((response) => {
        this.setState({ 
          query: city1, 
          humidity: response.currentDay.humidity,
          location: response.currentDay.location,
          maxTemp: response.currentDay.maxTemp,
          minTemp: response.currentDay.minTemp,
          status: response.currentDay.status,

                })
        console.log('***', this.state)
      }) // change this to render 
    console.log(city1)

  }
  componentWillMount(){
    this.searchWeather()
  }
 

  render() {
      return (
        <div>
          
          <Link to={{pathname: '/details',
                      state: this.state
                    }}>
            
            <WeatherHead status={this.state.status} />   
            <h2>{moment(betterWay).format("dddd, MMM, D")}</h2>
              
          
          </Link>
          
        </div>
      )
  }
}

module.exports  = CurrentForcast;
