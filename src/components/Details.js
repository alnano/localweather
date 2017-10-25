const React = require('react');



class Details extends React.Component {
  constructor(props){
    super(props)
    
    this.info = this.props.location.state
  }
  render() {
    return (
      <div>
        {console.log('>>>>>>>>>>', this.info)}
      <h2>testttt</h2>
        <h1>{this.info.location}</h1>
        <h1>{this.info.status}</h1>
        <h1>{this.info.minTemp}</h1>
        <h1>{this.info.maxTemp}</h1>
        <h1>{this.info.humidity}</h1>
      </div>
    )
  }
}


module.exports = Details;