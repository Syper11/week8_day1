import React, { Component } from 'react'
import Shop from "../components/Shop"

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  };



  showItems = () => {
    return this.state.posts.map(p => <Shop key={p.id} itemInfo={p}/>)
  };

  getItems = async () => {
    const res = await fetch(`http://localhost:5000/api/all_products`);
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
        {this.showItems()}
      </div>
    )
  }
}