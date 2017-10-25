const React = require('react');
// const axios = require('axios'); //possible delete
const Link = require('react-router-dom').Link;
// const get = require('../components/api') //dele
// const Forcast = require('../components/Forcast') // delde
// const queryString = require('query-string') // dele
// const CurrentForcast = require('../components/CurrentForcast'); // dele


class Header extends React.Component {
  constructor(props){
    super(props)   
    
    this.state = {
      location: '',
    }
    this.searchWeather = this.searchWeather.bind(this);
    this.locationChange = this.locationChange.bind(this);
  }

  locationChange(event){
    const value = event.target.value
    // this.setState(function(){
    //   return{
    //   location: value
    //   } // use function setState to get previous state
    // })
    this.setState({location: value })
  }

  searchWeather(event){
    // event.preventDefault()
    
    // get()
    //   .then(function(response){
    //     console.log(response) 
    //   })
    // console.log(Forcast.updateQuery)
  }

  render(){
    
    return(
      
      <div className='header'>
        
        <form className='form'>
          <input value={this.state.value} onChange={this.locationChange} type='text' />
         
        </form>
        <Link className='button' to={{pathname: '/forcast', search:`?location=${this.state.location}`}} onClick={this.searchWeather}>
          test
        </Link>
      </div>
    )
  }

}


  
module.exports = Header