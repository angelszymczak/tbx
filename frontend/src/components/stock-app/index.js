import React, { Component } from 'react'
import './index.css'
import Header from '../header'
import StockList from '../stock-list'

class StockApp extends Component {
  constructor (props) {
    super(props)
    this.state = { stocks: [] }
  }

  componentWillMount () {
    fetch ('http://localhost:3000/api/stocks')
      .then((response) => {
        return response.json()
      })
      .then((stocks) => {
        this.setState({ stocks: stocks })
      })
  }

  render () {
    if (this.state.stocks.length > 0) {
      return (
        <div>
          <Header />
          <div className='container'>
            <StockList stocks={this.state.stocks} />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          <p className='text-center'>Cargando stocks...</p>
        </div>
        )
    }
  }
}

export default StockApp
