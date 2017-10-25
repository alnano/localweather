const React = require('react');
const axios = require('axios');
const api = require('../components/api')
const queryString = require('query-string')
const Link = require('react-router-dom').Link;


/*
testObj>data>city>name = san jose
testObj>data>list[0]>dt_text - date;
testObj>data>list[0]>main>temp_max - max temp;
testObj>data>list[0]>main>temp_min -min temp
testObj>data>list[0]>main>humidity 
testObj>data>list[0]>weather[0].description - 'clear sky'



*/
class FourDayWeather extends React.Component{
 constructor(props){
   super(props)

   this.state = {
     data: ''
   }
   this.ss = this.ss.bind(this)
 }
 
 ss(){
   
   console.log(this.props)
   this.setState({ data: this.props.data.data})
   
  
  
 }
 componentWillMount(){
   this.ss()
 }

 render(){
   console.log(this.state)
  return(
    
    <div>
      {!this.state.data
      ? <h1>loading</h1>
      :<h1>{this.state.data.currentDay.location}</h1>
      }
    </div>
  ) 
}
  
}




class WeeklyForcast extends React.Component{
  constructor(props){
    super(props)

    this.searhWeekly = this.searhWeekly.bind(this);
   
  }
  
  searhWeekly(){

    this.objj = 'g'
    const city1 = this.props.search.query.location
    api(city1)
        .then((response) => {
          
    console.log(response.week);
    this.objj = response
    return response;
    }).then((response) =>{
      this.setState({ data: response })
    })
  }

  componentWillMount(){

    this.searhWeekly()
  }
  

  render(){
    if(this.state && this.state.data){
      console.log('ggg', this.state)
    }
    
      return(
        <div> 
          

          <button onClick={this.searhWeekly}> this is redic </button>
          <h2> test again </h2>
          {!this.state
          ?<h2>loadin</h2>
          :<FourDayWeather data={this.state}/>
          }
        </div >
          
      )
  }



}


module.exports = WeeklyForcast;