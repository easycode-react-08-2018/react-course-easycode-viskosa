import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { DangerButton } from './button'

class App extends Component {

  myRef = React.createRef();

  componentDidMount() {

    console.log(this);
    console.log(this.myRef.current.clientWidth);
  }

  render() {
    return (
      /*<div className="App" ref={(ref) => { //callback ref
        this.myRef = ref;
      }}>*/
      <div className="App" ref={this.myRef}>
        <button>MY BUTTON</button>
        <DangerButton forwardRef={ref => {
          console.log(ref);
        }}/>
      </div>
    );
  }
}

export default App;
