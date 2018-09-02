import React, {Component} from 'react';
import {OneItemBlockCart} from '../components/one-item-block-cart.js';

export class ShoppingCart extends Component {
	render() {
		const {logout, shipIt} = this.props;

      let itemsArray = this.props.willBePurchased.map((item, i) => {
        return <OneItemBlockCart key={i} value={item} />
      });

		return (
		<div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Shopping Cart</h1>
              <ul className="list-group">

                {itemsArray}

              </ul>
            </div>
            <div className="col-4">
              <div>
                User
              </div>
              <button onClick={logout}>User Logout</button>
            </div>
          </div>
          <div className="row">
            <pre>price:</pre>
          </div>
          <div className="row">
            <button className="btn btn-primary" onClick={shipIt}>Ship it</button>
          </div>
        </div>

			)
	}

} 