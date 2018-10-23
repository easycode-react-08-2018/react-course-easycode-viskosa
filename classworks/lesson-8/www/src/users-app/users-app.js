import React, {Component} from 'react';
import {UsersList} from './users-list';

class UsersApp extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch('/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          users,
        });
      });
  };

  render() {
    const {
      users
    } = this.state;

    return (
      <div className="users-app">
        <UsersList users={users} getUsers={this.getUsers}/>
      </div>
    );
  }
}

export default UsersApp;


/*1 файл*/
/*- В стейте есть массив users, по умолчанию пустой;
- есть ф-ция - запрос getUsers, которая наполнит массив users;
- по componentDidMount вызывается ф-ция getUsers, которая меняет стейт и соответственно вызывается рендер
- Этот массив передаем в компонент UsersList;
- ф-цию getUsers передаем в компонент UsersList*/