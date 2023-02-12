import React, { Component } from 'react';


class Product extends Component {
  handleClick = () => {
    this.props.addToCart(this.props.product);
  };

  render() {
    const { item_name, img_url, price } = this.props.product;
    return (
                <div id="sale_post" className="row jus">
                    <div id="ind_cards" className="card" style={{ width: "18rem" }}>
                        <img src={img_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item_name}</h5>
                            <p className="card-text">${price}.00</p>
                            <button onClick={this.handleClick}>Add To cart!</button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Product;