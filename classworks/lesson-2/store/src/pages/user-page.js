import React, { Component } from "react";
import { OneItemBlockUserPage } from "../components/one-item-block-user-page.js";
import { SuccessTemplate } from "../components/success-template.js";
import { PlainButton } from "../components/plain-button.js";

export class UserPage extends Component {
  render() {
    const { logout, goToCart, buyItem, isTicked, isButton } = this.props;

    //let ticks = isTicked && <SuccessTemplate/>;
    //let button = isButton && <PlainButton buyItem={buyItem}/>;

    /*let itemsArray = this.props.items.map((item, i) => {
      return <OneItemBlockUserPage key={i} value={item} ticks={ticks} button={button}/>
    });*/

    let itemsArray = this.props.items.map((item, i) => {
      return <OneItemBlockUserPage key={i} value={item} buyItem={buyItem} />;
    });

    return (
      <div className="container">
        <h1>USER PAGE</h1>
        <div className="row">
          <div className="col-8">
            <div className="row" id="orders">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">MacBook pro 2018</h5>
                  <p className="card-text">MacBook pro 2018</p>
                  {/*{ticks}
                    {button}*/}
                  <button className="btn btn-light" disabled>
                    Buy
                  </button>
                  <h3 className="text-success">✓✓✓✓✓</h3>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Dell xs</h5>
                  <p className="card-texDt">Dell xs</p>
                  {/*{ticks}
                    {button}*/}
                  <a href="#" className="btn btn-primary" onClick={buyItem}>
                    Buy
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Microsoft Surface</h5>
                  <p className="card-text">Microsoft Surface</p>
                  {/*{ticks}
                    {button}*/}
                  <a href="#" className="btn btn-primary" onClick={buyItem}>
                    Buy
                  </a>
                </div>
              </div>

              {itemsArray}
            </div>
          </div>
          <div className="col-4">
            <div>User</div>
            <button onClick={logout}>User Logout</button>
            <button onClick={goToCart}>Orders</button>
          </div>
        </div>
      </div>
    );
  }
}
