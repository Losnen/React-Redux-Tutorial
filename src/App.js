import React, { Component, Proptypes } from 'react'

class App extends Component {
  render () {
    return (
      <div>
        <header> Ecommerce </header>
        {this.props.children}
        <footer> &copy; 2018 </footer>
      </div>
    )
  }
}

App.propTypes = {
  children: Proptypes.object.isRequired
}

export default App
