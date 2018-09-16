import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux' // чтобы приконнектить стор, который у нас в index.js
import {increment} from './actions/increment.js'
import {decrement} from './actions/decrement.js'
import {incrementPlus} from './actions/incrementPlus'

export class App extends Component {
  state = {
    inputValue: '',
    //xxx: ''
  };

  updateInput = (event) => {
    const { name, value } = event.target;
    this.setState({
      inputValue: value
      //[name]: +value
    })
  }

  clearInput() {
    this.setState({
      inputValue: ''
    })
  }

  render() {  //в this.props пришло то, что передали в хок connect
    console.log(this.props);// {myCounter: 0, myRedux: "is a power", increment: ƒ, decrement: ƒ, incrementPlus: ƒ}
    const { increment, decrement, myCounter, incrementPlus } = this.props;
    const { inputValue } = this.state;
    return (
      <div className="App">
        {/*<button onClick = {this.props.dispatch({ type: 'INCREMENT'})}>INCREMENT</button>*/}{/*это антипаттерн, так не делают*/}
        <button onClick = { () => {
            increment(+inputValue);
            this.clearInput();
          }}>INCREMENT</button>
        <p>myCounter: {myCounter}</p>
        <button onClick={decrement}>DECREMENT</button>
        <input type="text" onChange={this.updateInput} value={inputValue } name="xxx"/>
        <button onClick={ () => {
            incrementPlus(+inputValue);
            this.clearInput();
          }     
        }>Add</button>
      </div>
    );
  }
} // end of class App

//-------------------------------------------------------------------
const mapStateToProps = (state) => { // эту ф-цию передадим в сonnect, он сделает хок и в пропсы Аппа попадут
                                    // те свойства, которые возвращает mapStateToProps (объект свойств)
                                    // Здесь мы можем видеть state, потому что его присоединил connect
  console.log(state);          // {counter: 0}, пришел из index.js, это initialState. 
  return {                    // тут вернем то, что попадает в пропсы Аппа
    myCounter: state.counter, // и назовем так, как будем использовать в Аппе
    myRedux: 'is a power'
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

export const AppWithStore = connect(mapStateToProps, mapDispatchToProps)(App);//это HOC, передает стейт в пропс
// connect - это НОС, который принимает еще переменные. В зависимости от того, что в него придет, 
// то же придет и в Апп. 

// хотим из index.js в пропсы Аппа передать например константу initialState = {counter: 0}, 
// она передается в первых скобочках в connect (в хоке). Если не передать, то в Апп в пропсах ничего не придет
// connect умеет доставать стейт из mapStateToProps и передавать его в Апп
// каждый компонент работает со стейтом через коннект
// коннектов м.б. миллион. Там, где что-то нужно сделать со стейтом - достать его или обновить - используем коннект

// вместо mapDispatchToProps в хок вторым параметром можно передать объект { increment, decrement, incrementPlus }