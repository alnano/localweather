const React = require('react');

class WeatherHead extends React.Component{
  constructor(props){
    super(props)

    
  }
  componentWillMount(){
   
    this.setState({weather: this.props.status});
    console.log(this.state) //null
  }

  render(){
    console.log(this.props) // null
    console.log(this.state) //null
    return(
      <div>
      <h1>{this.state.weather}</h1> //empty 
      <h1>{this.props.status}</h1>
      </div>
    )
  }


}

module.exports = WeatherHead;

