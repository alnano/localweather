const React = require('react');



const CurrentDay = (props)=>{
  console.log('this.props', props)
    return(
      <div> 
        <h1>{props.info.location}</h1>
        <h1>{props.info.status}</h1>
        <h1>min temp: {props.info.minTemp}</h1>
        <h1>max temp: {props.info.maxTemp}</h1>
        <h1>humidity: {props.info.humidity}</h1>
      </div>
    )
  
}
/*
send over just the state u want.

*/


class Details extends React.Component {
  constructor(props){
    super(props)
    
    
    
  }
  render() {
   
    const info = this.props.location.state
    console.log('ssss', info)
    console.log('wtf:', info.data)
    
    
    return (
      <div> 
        {!info.data
        ?<CurrentDay info={info}/>
        :<h2>test</h2>
        } 
       </div>
    )
  }
}


module.exports = Details;
















 // <h1>{this.info.pic}</h1>
        // <h1>{this.info.location}</h1>
        // <h1>{this.info.status}</h1>
        // <h1>{this.info.minTemp}</h1>
        // <h1>{this.info.maxTemp}</h1>
        // <h1>{this.info.humidity}</h1>
