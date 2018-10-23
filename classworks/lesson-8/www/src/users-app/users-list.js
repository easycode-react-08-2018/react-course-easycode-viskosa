//=== compose, recompose without redux ===============================================
// чтобы запустить проект, нужно перейти в \classworks\server\content и запустить сервер nodemon server.js, 
// а потом в \classworks\lesson-8\www npm start

// что тут происходит? При нажатии на кнопку Refresh сервер задумывается на 2 секунды, в этот
// момент появляется надпись Loading..., потом отдаются юзеры и надпись Loading... пропадает
// тут все без редакс

import React, {Component} from 'react';
import {withState, withHandlers, compose, lifecycle, withProps} from 'recompose';

import './users-list.css';

export class UsersListComponent extends Component {

  static defaultProps = {
    users: [{fname: 'test', lname: 'test', id: '0'}],
  };

  //=====без recompose===============================================================================
  //componentWillReceiveProps(nextProps) {
    // тут хотим сравнить следующие пропсы с текущими и если они не равны, т.е. если у меня пришли новые пользователи,
    // то убираем надпись 'Loading...', т.е. в стейте устанавливаем isLoading в false
  //  if (nextProps.users !== this.props.users) {
  //    this.setState({
  //      isLoading: false, 
  //    })
  //  }
  //}

  //shouldComponentUpdate(nextProps, nextState) { // с этим хуком очень осторожно, т.к. если он вернет фолс, никто ниже него не обновится
  //  return this.state.isLoading !== nextState.isLoading;
    // т.е. если isLoading уже установлен такой, то не нужно обновлять компонент
  //}

  //getUsersWithLoader = () => {
  //  this.setState({
  //    isLoading: true;
  //  },
  //  this.props.getUsers // в setState вторым параметром момно передать колбек,
    // типа установи в стейт isLoading в true и потом вызови ф-цию this.props.getUsers
  //  );
    
  //} //но теперь получается, что при многократном нажатии на кнопку происходит много рендеров, а нам нужно, чтобы
  // сначала сервер дал ответ, потом произошел рендер и уже потом при нажатии на кнопку произошел новый запрос и один новый рендер
  // Такую проверку можно сделать в методе shouldComponentUpdate()

  // лайфсайкл методы перенесли в lifecycle, который импортнули из recompose

  //======================================================================================

  renderUsers() {
    return this.props.users.map((user, index) => (
      <li className="users-list-item" key={user.lname + index}>
        <div>fname: {user.fname}</div>
        <div>lname: {user.lname}</div>
      </li>
    ));
  }

  render() {
    const {isLoading, getUsersWithLoader, getXXXX} = this.props;

    console.log(this.props); //{users: Array, getUsers: f, isLoading: false, setLoadingState: f, getUsersWithLoader: f}

    return (
      <React.Fragment>
        <button onClick={getXXXX}>some else button</button>
        <button onClick={getUsersWithLoader}>Refresh</button>
        {isLoading && 'Loading...'}
        <ul className="users-list">{this.renderUsers()}</ul>
      </React.Fragment>
    );
  }
}

const withLoadingState = compose(
  withState('isLoading', 'setLoadingState', false),
  //withState принимает 1 - стейт-имя, 2 - имя обновлялки стейта, 3 - инишиал стейт 
  // setLoadingState изменяет состояние props, которое придет в рендер
  withHandlers({ // в пропсах появятся ф-ции getUsersWithLoader и setUnloadingState
    getUsersWithLoader: (props) => () => {
      props.setLoadingState(true, props.getUsers); //setLoadingState установит в стейте isLoading в true и вызовет колбек props.getUsers 
    },
    setUnloadingState: (props) => () => {
      props.setLoadingState(false);
    },
  }),
);

const withOptimization = compose(
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.users !== this.props.users) {
        this.props.setUnloadingState();
      }
    },
    shouldComponentUpdate(nextProps) {
      return this.props.isLoading !== nextProps.isLoading;
    },
  }),
);

export const UsersList = compose(
  withLoadingState, 
  withOptimization, 
  // withProps в основном используется, чтобы какую-то пропсу переименовать
  withProps((props) => { // можно написать так - сюда приходят все пропсы
    const getXXXX = props.getUsersWithLoader; //пропсу getUsersWithLoader переименовываем в getXXXX
    return {
      getXXXX,// и возвращаем ее - она появится в рендере дополнительно к тем пропсам, что были
    } 
  }),
  )(UsersListComponent); // сюда в compose может приходить
// много чего, например, если заказчик хочет, чтобы когда юзер оффлайн, чтобы кнопка была отключена, то мы дополнительно можем
// передать что-то вроде hideIfAppOffline
// и туда же можно передать connect, а в него как обычно mapStateToProps, mapDispatchToProps 

const add = (a) => a + 10;

//compose, который импортнули из recompose, карированный
console.log(compose(add, add)(50));//70 //там, где 2 раза написано add - там может принимать неограниченное кол-во аргументов
// и потом 50 передает в последний add, потом в предпоследний и т.д. по цепочке

// зачем нужен compose? можно писать маленькие ф-ции типа как add написанная выше, 
// а потом написать addTwenty и она вернет 20: 
const addTwenty = compose(add, add);


/*2 файл*/
/*
- тут есть значения по умолчанию static defaultProps;
- ф-ция renderUsers, которая из массива users создает новый массив - список юзеров
- и в render рендерим их
*/

//==== conpose =======================================
// ппример с замыканиями
const add2 = (a) => b => a + b;
//add(10)(20) //30

// compose
// f(g(h))
const compose2 = f => g => h => f(g(h)); // ф-ция, которая прнимает f, потом g, потом h
compose2(add2(10))(add2(20))(70) //100 // так себе запись, можно проще
