import React, { Component } from "react";

export class OneItemBlockUserPage extends Component {
  render() {
    //const {value, button, ticks} = this.props;
    const { value, buyItem } = this.props;

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{value}</h5>
          <p className="card-texDt">{value}</p>
          {/*{ticks}
                    {button}*/}
          <a href="#" className="btn btn-primary" onClick={buyItem}>
            Buy
          </a>
        </div>
      </div>
    );
  }
}
