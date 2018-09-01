import React, {Component} from 'react';
import {OneItemBlock} from './one-item-block.js';


export class AdminPage extends Component {
	render() {

		const {logout, inputChange, value, add, goToCart} = this.props;

		let itemsArray = this.props.items.map((item, i) => {
			return <OneItemBlock key={i} value={item}/>
		})

		return (
		<div className="container flex-grow-1">
          <div className="row">
            <div className="col-8">
              <div className="admin-orders">

                <h1>ADMIN PAGE</h1>
                <ul className="list-group">
                  <li className="list-group-item">
                    <img src="#" alt=""/>
                    <a href="#" className="admin-orders__link">
                      MacBook pro 2018
                    </a>
                    <h2 className="float-right btn-link">✎</h2>
                  </li>
                  <li className="list-group-item">
                    <img src="#" alt=""/>
                    <a href="#" className="admin-orders__link">
                      Dell xs
                    </a>
                    <h2 className="float-right btn-link">✎</h2>
                  </li>
                  <li className="list-group-item">
                    <img src="#" alt=""/>
                    <a href="#" className="admin-orders__link">
                      Microsoft Surface
                    </a>
                    <h2 className="float-right btn-link">✎</h2>
                  </li>

                  {itemsArray}

                </ul>

                <br/>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                  </div>
                  <input type="text" className="form-control" placeholder="enter new name"
                  		value={value}
                  		onInput={inputChange}/>
                  <button className="btn btn-primary"
                  			onClick={add}>
                  			Add
                  </button>
                </div>

              </div>
            </div>

            <div className="col-4">
              <div>
                Admin
              </div>
              <button onClick={logout}>User Logout</button>
              <button onClick={goToCart}>Orders</button>
            </div>

          </div>
        </div>

			)
	}

} 