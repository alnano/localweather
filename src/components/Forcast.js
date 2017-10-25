const React = require('react');
// const axios = require('axios'); //possible delte
// const api = require('../components/api'); //dele
const queryString = require('query-string');
const CurrentForcast = require('../components/CurrentForcast');
const WeeklyForcast = require('../components/WeeklyForcast');
//ajax requets 



class Forcast extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        query: ' '
      } 
     
      this.searchWeather = this.searchWeather.bind(this);
      this.greed = this.greed.bind(this)
  }


  searchWeather(){
    const city = queryString.parse(this.props.location.search)
    const city1 = city.location
    console.log(city)
    console.log(city1)
    this.setState({query: city })
    // api(city1)
    //   .then((response)=>{
    //     console.log(response);
    //     return response;
    //     // console.table('log',response)
    //   })
    //   .then((response)=>{
    //     this.setState({query: city1})
    //     console.log('fffff', this.state)
    //   })
      

  }


  greed(tes){
    console.log('...........', tes);
  }
  componentWillMount(){
  
    this.searchWeather()
  
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.location.search === this.props.location.search){
      this.searchWeather()        
      console.log(this.state.query);
      return true
    }else{ 
      this.searchWeather()
      return false
    }
    
  }


  render(){
   
   return(
    <div>
      <CurrentForcast search={this.state} />
      <WeeklyForcast search={this.state}  />
    </div>
   )  
  }




}

module.exports = Forcast