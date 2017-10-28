const Rain = require('../images/weather-icons/if_cloudy_hr.svg')
const ClearSky = require("../images/weather-icons/clear_day.svg")
const Clouds = require("../images/weather-icons/clouds.png")
const Snow = require("../images/weather-icons/snow.svg")
const React = require('react');
// import Rain from '../images/weather-icons/if_cloudy_hr.svg'


class WeatherHead extends React.Component{
  constructor(props){
    super(props)
      this.state={
        weather :'',
        link: null,
      }
    
    this.updateLink = this.updateLink.bind(this)
  }
  updateLink(){

    if(this.props.status !== 'light rain'){
      this.setState({link : Rain})
    }
    
  }
  componentDidMount(){
    this.updateLink()
    this.setState({weather: this.props});
    
  }
  componentDidUpdate() {
    console.log('this.state', this.state)
    console.log('greed', this.props)
  }

  render(){
   
    console.log('this.props',this.props) // null
    var weatherLogo = null
    
    if(this.props.status === 'light rain' || 'rain'){
      weatherLogo = Rain
    }
    if(this.props.status === 'clear sky'){
      weatherLogo = ClearSky
    }
    if(this.props.status === 'few clouds' ){
      weatherLogo = Clouds
    }
    if(this.props.status === 'snow'){
      weatherLogo = Snow
    }
   
    return(
      <div>
      {!this.props.status 
      ?<h1>loading </h1>
      :<img src={weatherLogo} />

      }
      </div>
    )
  }


}
//<img src={this.state.link} /> 
module.exports = WeatherHead;

