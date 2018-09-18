import React, { Component } from "react";
import "./App.css";
//import { DangerButton } from './button'
import { incrementCounter, incrementAsyncCounter } from "./actions";
import { connect } from 'react-redux';

export class AppComponent extends Component {
  /*myRef = React.createRef();

  componentDidMount() {

    console.log(this);
    console.log(this.myRef.current.clientWidth);
  }*/

  /*render() {
    return (
      /*<div className="App" ref={(ref) => { //callback ref
        this.myRef = ref;
      }}>*/
  /*<div className="App" ref={this.myRef}>
        <button>MY BUTTON</button>
        <DangerButton forwardRef={ref => {
          console.log(ref);
        }}/>
      </div>
    );
  }*/
  createIncrementor = (value) => () => {
    return this.props.incrementCounter(value);
  }

  render() {
    console.log('this.props', this.props);
    const { incrementCounter, counter } = this.props;
    return (
      /*<div className="App" ref={(ref) => { //callback ref
        this.myRef = ref;
      }}>*/
      <div className="App">
        <div>
          <h3>SYNC</h3>
          <button
            onClick={() => {
              incrementCounter(1);
            }}
          >
            INCREMENT
          </button>
          <button onClick={this.createIncrementor(1)}>
            INCREMENT
          </button>          
          <p>counter state: {counter}</p>
          <button onClick={this.createIncrementor(-1)}>DECREMENT</button>
        </div>

        <hr />

        <div>
          <h3>ASYNC</h3>
          <button>ASYNC INCREMENT</button>
          <p>counter state: {}</p>
          <button>ASYNC DECREMENT</button>
        </div>
      </div>
    );
  }
}

//export default App;

const selectCounter = (state) => {
  return state.counterReducer.counter
}

const mapDispatchToProps = {
  incrementCounter
};

const mapStateToProps = state => {
  console.log("state", state);
  return {
    //myCounter: state.counter
    counter: selectCounter(state)
    //counter: state.counter.counter
  };
};

export const AppWithStore = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
