import React, { Component } from 'react'

export default class CartsItems extends Component {
    render() {
        return (
            <div className="container col-3">
                <h1 id="title">Shopping Cart</h1>

                <h5 id="title">Your Items:</h5>
                <div className="row">
                    <div className="column">
                        <div className="cart card" style={{ width: "18rem" }}>



                            <a className="text-dark text-decoration-none" href="#">
                                <img src={this.props.itemInfo.img_url} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{this.props.itemInfo.item_name} </h5>
                                    <p className="card-text">${this.props.itemInfo.price}.00</p>
                                </div>
                            </a>

                            <a type="button" className="btn btn-danger"
                                href="#" action="">Delete</a>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
