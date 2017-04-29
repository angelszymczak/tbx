import React, { Component } from 'react'
import './dist/css/bootstrap.min.css'
import './dist/css/bootstrap-theme.min.css'
import './index.css'

class StockList extends Component {
  render () {
    return (
      <div>
        <table className='table table-striped table-bordered container'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.stocks.map((stock) => {
                return (
                  <tr key={stock._id}>
                    <td>{stock._id}</td>
                    <td>{stock.productName}</td>
                    <td>{stock.count}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default StockList
