import React, { Component } from 'react'
import CartsItems from '../components/CartsItems'

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  };



  showItems = () => {
    return this.state.posts.map(p => <CartsItems key={p.id} itemInfo={p}/>)
  };

  getItems = async () => {
    const res = await fetch(`http://localhost:5000/api/<item_name>`);
    const data = await res.json();
    console.log(data)
    if (data.status==='ok'){
      this.setState({posts:data.posts})
    }




  }
  componentDidMount = () => {
    this.getItems();
  }



  render() {
    return (
      <div>
        <h1>Cart</h1>
        {this.showItems()}
      </div>
    )
  }
}