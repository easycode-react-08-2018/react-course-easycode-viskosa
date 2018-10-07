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
  createIncrementor = (value) => () => { // запомнили в замыкании передаваемое значение value (1 или -1)
                                         // потом вернули функцию, которая значение будет брать из замыкания
    return this.props.incrementCounter(value);
  }

  createIncrementorAsync = (value) => () => { 
    return this.props.incrementAsyncCounter(value);
  }
  /*идеальный вариант - это еще спрятать, что мы передаем ф-цию, кот срабатывает по нажатию на кнопку:
    increment = () => {
      return this.createIncrementor(1);
    };

    decrement = () => {
      return this.createIncrementor(-1);
    };

    и в кнопки передавать просто {this.increment} и {this.decrement}, только из ф-ции 
    createIncrementor убрать замыкание, т.е. "=> ()"
  */

  render() {
    console.log('this.props', this.props); // {counter: 500, incrementCounter: ƒ}
    const { incrementCounter, counter } = this.props;
    return (
      /*<div className="App" ref={(ref) => { //callback ref
        this.myRef = ref;
      }}>*/
      <div className="App">
        <div>
          <h3>SYNC</h3>
          <button onClick={() => { incrementCounter(1) }}> {/*передаем 1 в ф-цию incrementCounter, 
                                        которая лежит в actions.js, оттуда она попадает в редьюсер, 
                                        который возвращает новый стейт, у которого каунтер уже увеличен на 1*/}
            INCREMENT
          </button>
          {/*или можем написать так:*/}
          <button onClick={this.createIncrementor(1)}> INCREMENT</button>          
          <p>counter state: {counter}</p>
          <button onClick={this.createIncrementor(-1)}> DECREMENT</button>
        </div>

        <hr />

        <div>
          <h3>ASYNC</h3>
          <button onClick={this.createIncrementorAsync(1)}>ASYNC INCREMENT</button>
          <p>counter state: {counter}</p>
          <button onClick={this.createIncrementorAsync(-1)}>ASYNC DECREMENT</button>
        </div>
      </div>
    );
  }
}

//export default App;

const selectCounter = state => {
  return state.counterReducer.counter//берется из редьюсера (из store)
}

const mapDispatchToProps = {
  incrementCounter, //берется из actions.js, сработает, когда нажму на кнопку
  incrementAsyncCounter
};

const mapStateToProps = state => { //в стейте лежат все закомбайненные редьюсеры
  console.log("state", state); //{counterReducer: {counter: 500} }
  return {
    counter: selectCounter(state) //так пишут в продакшене, т.е.создают отдельную константу selectCounter
    //counter: state.counterReducer.counter
  };
};

export const AppWithStore = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

/*
1. нажимаем кнопку ASYNC INCREMENT
2. пришли консоль логи PREV STATE из store.js из первой мидлвары logMiddleware == 500
   и оттуда же ACTION = ф-ция, которую возвращает incrementAsyncCounter, который нaходится в actions.js
3. Потом в logMiddleware срабатывает next(action), т.е. вызывается incrementAsyncCounter из actions.js
   В ней происходит запрос на сервер, и когда ответ придет, вызовется редьюсер и увеличится счетчик
4. Потом, не дожидаясь ответа от сервера, сразу срабатывает console.log('CURRENT STATE:', store.getState())
   из logMiddleware из store.js
5. Потом, когда уже приходит ответ от сервера, опять:
  - пришли консоль логи PREV STATE из store.js из первой мидлвары logMiddleware == 500
    и оттуда же ACTION - теперь это {type: "ASYNC_INCREMENT", payload: 1},
  - вызвался рендер, на вью-части изменяется значение каунтера,
  - и пришел console.log('CURRENT STATE:', store.getState()) из logMiddleware из store.js

*/