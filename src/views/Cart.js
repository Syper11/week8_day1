import React, { Component } from 'react'


export default class Shop extends Component {
    handleClick = id => {
        this.props.removeProduct(id)
    }
    render() {
        return (
                <div id="sale_post" className="row jus">
                    <div id="ind_cards" className="card" style={{ width: "18rem" }}>
                        <img src={this.props.product.img_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.product.item_name}</h5>
                            <p className="card-text">${this.props.product.price}.00</p>
                            <button onClick={() => this.handleClick(this.props.product.id)}>Remove Item!</button>
                        </div>
                    </div>
                </div>
        )
    }
}