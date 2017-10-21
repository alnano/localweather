const React = require('react');
const axios = require('axios');
const api = require('../components/api')
//ajax requets 


class Forcast extends React.Component{
  constructor(props){
    super(props)
      this.state = {
        query: 'kkkk'
      } 
      // this.updateQuery = this.updateQuery.bind(this);
      this.initStateSet = this.initStateSet.bind(this);
      // this.searchWeather = this.searchWeather.bind(this);
      this.greed = this.greed.bind(this)
  }

  // updateQuery(){
  //   this.setState(function(){
  //     return {query: this.props.location.search}
  //   });
    
  // }
  // searchWeather(){

  //   api()
  //     .then(function(response){
  //       console.log(response);
        
  //     })
  //     .then(function(response){
  //       this.setState({query: this.props.location.search})
  //       console.log('fffff', this.state)
  //     }.bind(this))
  // }

  initStateSet(){
    const search = this.props.location.search.slice(0,0);
    // this.setState(function(){
    //   return{
    //     query: this.props.location.search
    //   }
    // }.bind(this))
    this.setState({query: this.props.location.search})
   
  }
  greed(){
    console.log(this.state);
  }
  componentWillMount(){
    this.initStateSet()
    
  
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.location.search === this.props.location.search){
      // this.updateQuery()
      console.log(this.state);
      return true
    }else{ 
      // this.updateQuery()
      console.log(this.props, 'bbbb') 
      return false
    }
    console.log(this.state.query)
  }

  render(){
    // console.log("...................", this)
   return(
     <h2>forcast</h2>
   )   
  }




}

module.exports = Forcast