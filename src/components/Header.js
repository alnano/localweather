const React = require('react')



class Header extends React.Component {
  constructor(props){
    super(props)   


  }
  render(){
    return(
      <div className='header'>
        <h2 className='test'> test </h2>
        <form className='form'>
          <input type='text' />
          <button>Get Weather</button>
        </form>
      </div>
    )
  }

}

module.exports = Header