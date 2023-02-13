import React, { Component } from 'react'
import Shop from '../components/Shop'



export default class Cart extends Component {
    handleClick = index => {
        this.props.removeProduct(index)
    };

    showItems = () => {
        return this.props.items.map(item => <Shop key={item.id} item={item} removeProduct={this.props.removeProduct} handleDeleteAll={this.props.handleDeleteAll}/>)
      };

      render() {
        return (
          <div>
            {this.showItems()}
            <button onClick={this.handleDeleteAll}>clear Cart!!</button>
          </div>
        )
        }
    }