import React, { Component } from 'react'
import Product from "../components/Product"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    }
  };



  showItems = () => {
    return this.state.product.map(product => <Product key={product.id} product={product} addProduct={this.props.addProduct}/>)
  };
  
  getItems = async () => {
    const res = await fetch(`http://localhost:5000/api/all_products`);
    const data = await res.json();
    console.log(data)
    if (data.status==='ok'){
      this.setState({product:data.posts})
    }




  }
  componentDidMount = () => {
    this.getItems();
  }



  render() {
    return (
      <div>
        {this.showItems()}
      </div>
    )
  }
}