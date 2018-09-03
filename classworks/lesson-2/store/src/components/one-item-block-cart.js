import React, { Component } from "react";

export class OneItemBlockCart extends Component {
  render() {
    const { value, buyItem } = this.props;

    return (
      <li className="list-group-item">
        <img src="#" alt="" />
        <a href="#" className="admin-orders__link">
          {value}
        </a>
        <button className="float-right badge-light" onClick={buyItem}>
          ✓
        </button>
      </li>
    );
  }
}
