import React, { Component } from 'react'

export default class Shop extends Component {
    render() {
        return (
                <div id="sale_post" className="row justify-center">
                    <div id="ind_cards" className="card" style={{ width: "18rem" }}>
                        <img src={this.props.itemInfo.img_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.itemInfo.item_name}</h5>
                            <p className="card-text">${this.props.itemInfo.price}.00</p>
                            <a href="./Cart" className="btn btn-warning">Add to cart</a>
                        </div>
                    </div>
                </div>
        )
    }
}