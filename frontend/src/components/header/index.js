import React, { Component } from 'react'
import logo from './tbx.png'

class Header extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Toolbox Stock Products</h2>
        </div>
      </div>
    )
  }
}

export default Header
