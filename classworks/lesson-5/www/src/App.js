import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {increment} from './actions/increment.js'
import {decrement} from './actions/decrement.js'
import {incrementPlus} from './actions/incrementPlus'

export class App extends Component {
  state={
    inputValue: '',
    xxx: 0
  };

  updateInput = (event) => {
    const {name, value} = event.target;
    console.log(name, value)
    this.setState({
      //[name]: +value
      inputValue: value
    })
  }

  clearInputs() {
    this.setState({inputValue: ''})
  }

  render() {
    //console.log(props)
    const { increment, decrement, counter,incrementPlus } = this.props;
    const { inputValue, xxx } = this.state;
    return (
      <div className="App">
        <button 
        onClick = {increment}>INCREMENT</button>

        <p>counter: {counter}</p>

        <button onClick={decrement}>DECREMENT</button>
        <input type="text" name="xxx" onChange={this.updateInput} value={inputValue } />
        <button onClick={
          () => {
            incrementPlus(+inputValue)
          }     
        }>Add</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //console.log(state);
  return {
    counter: state.counter,
    redux: 'is a power'
  }
}

/*const mapDispatchToProps = { //перенесли в папку actions
  increment() {
    return {
      type: 'INCREMENT'
    }
  },
  decrement() {
    return {
      type: 'DECREMENT'
    }
  },
}*/
const mapDispatchToProps = {
  increment,
  decrement,
  incrementPlus
}

export const AppWithStore = connect(mapStateToProps, mapDispatchToProps)(App);//передает стейт в пропс
