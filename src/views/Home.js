import React, { Component } from 'react'
import CartsItems from "../components/Product"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      product: []
    }
  };



  showItems = () => {
    return this.state.product.map(product => <CartsItems key={product.id} product={product}/>)
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