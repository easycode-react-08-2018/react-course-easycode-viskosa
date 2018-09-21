import React, {Component} from 'react';

export class RecipesWrapper extends Component {
  render() {
    return (
      <div className="cb-recepts__content-wrapper fl fl-dir-col">
        {this.props.children}
      </div>
    );
  }
}
