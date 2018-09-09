import React, { Component } from "react";

export class ChildComponent extends Component { //компонент-ребенок
  render() {
    return  <div>
              'IM Child'
            </div>;
  }
}
//-----basic composition-------------------
export class ParentComponent_v1 extends Component { // родительский компонент
  render() {
    return (
      <div>
        <main>Wrapper</main>
        <ChildComponent />  //  в родительский компонент кладем ребенка - это базовая композиция
      </div>
    );
  }
}
//-----child composition-------------------
export class ParentComponent extends Component {
  render() {
    return (
      <div>
        <main>Wrapper</main>
        {this.props.children}
      </div>
    );
  }
}