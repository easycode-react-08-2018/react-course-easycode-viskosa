import React, {Component} from 'react';
import {OneItemBlockCart} from '../components/one-item-block-cart.js';

export class ShoppingCart extends Component {
	render() {
		const {logout, buyItem, shipIt} = this.props;

		let itemsArray = this.props.items.map((item, i) => {
	      return <OneItemBlockCart key={i} value={item} buyItem={buyItem}/>
	    });

		return (
		<div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Shopping Cart</h1>
              <ul className="list-group">

                <li className="list-group-item">
                  <img src="#" alt=""/>
                  <a href="#" className="admin-orders__link">
                    MacBook Pro 2018
                  </a>
                  <button className="float-right badge-light"
                  		  onClick={buyItem}>✓</button>
                </li>

                <li className="list-group-item">
                  <img src="#" alt=""/>
                  <a href="#" className="admin-orders__link">
                    Dell xs
                  </a>
                  <button className="float-right badge-light"
                  		  onClick={buyItem}>✓</button>
                </li>

                <li className="list-group-item">
                  <img src="#" alt=""/>
                  <a href="#" className="admin-orders__link">
                    Microsoft Surface
                  </a>
                  <button className="float-right badge-light"
                  		  onClick={buyItem}>✓</button>
                </li>

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