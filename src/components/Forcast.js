const React = require('react');
const queryString = require('query-string');
const CurrentForcast = require('../components/CurrentForcast');
const WeeklyForcast = require('../components/WeeklyForcast');



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
    <div className="container-2">
      <CurrentForcast classname="box1" search={this.state} />
      <WeeklyForcast classname="box2" search={this.state}  />
    </div>
   )  
  }




}

module.exports = Forcast