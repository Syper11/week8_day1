import React, { Component } from 'react';


class Shop extends Component {
  handleClick = () => {
    this.props.removeProduct(this.props.product);
    console.log(this.props.product,"product handle click")
  };
  

  render() {
    const { item_name, img_url, price } = this.props.item;
    return (
                <div id="sale_post" className="row">
                    <div id="ind_cards" className="card" style={{ width: "18rem" }}>
                        <img src={img_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item_name}</h5>
                            <p className="card-text">${price}.00</p>
                            <button onClick={this.handleClick}>remove from cart!</button>
                            
                        </div>
                    </div>
                </div>
        )
    }
}

export default Shop;