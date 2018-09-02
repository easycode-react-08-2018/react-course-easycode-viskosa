import React, {Component} from 'react';

import './App.css';
import {HomePage} from './pages/home-page.js';
import {AdminPage} from './pages/admin-page.js';
import {UserPage} from './pages/user-page.js';
import {ShoppingCart} from './pages/shopping-cart-page.js';

class App extends Component {
  constructor(){
    super();

    this.state = {
      activePage: 'homePage',
      inputValue: '', 
      newItems: [],
      willBePurchased: [],
      isTicked: false,
      isButton: true
    }

  }

  changePageToUserPage = () => {
    this.setState({
      activePage: 'userPage',
    }) 
  }

  changePageToAdminPage = () => {
    this.setState({activePage: 'adminPage'})
  }

  changePageToShoppingPage = () => {
    this.setState({
      activePage: 'shoppingCartPage'
    }) 
  }

  changePageToHomePage = () => {
    this.setState({
      activePage: 'homePage'
    }) 
  }

  addItem = () => {  
    if (!this.state.inputValue) {
      return;
    };
    this.state.newItems.push(this.state.inputValue);
    this.setState({inputValue: ''});
  }

  buyItemFromCart = (event) => {
    let item = event.target.previousElementSibling.textContent;
    this.state.willBePurchased.push(item);
    alert(item + ' was added to the cart');
    console.log(this.state.willBePurchased);
  }

  buyItemFromUserPage = () => { //сразу все отмечаются галочками, это неправильно
    this.setState({
      isTicked: true,
      isButton: false
    })
  }

  inputChange = (event) => { 
    this.setState({
      inputValue: event.target.value, 

    })
  }

  shipIt = () => {
    console.log('Ship it!');
  }

  render() {
    const {activePage} = this.state;

    if (activePage === 'homePage') {
      return <HomePage 
        changePageToAdmin={this.changePageToAdminPage}
        changePageToUser={this.changePageToUserPage}
        />
    };

    if (this.state.activePage === 'adminPage') {
      return <AdminPage 
        logout = {this.changePageToHomePage}
        inputChange = {this.inputChange}
        value = {this.state.inputValue}
        add = {this.addItem} 
        items = {this.state.newItems} 
        goToCart = {this.changePageToShoppingPage} />
    };

    if (this.state.activePage === 'userPage') {
      return <UserPage 
        logout = {this.changePageToHomePage}
        items = {this.state.newItems}
        goToCart = {this.changePageToShoppingPage}
        buyItem = {this.buyItemFromUserPage}
        isTicked = {this.state.isTicked}
        isButton = {this.state.isButton}
      />
    };
    if (this.state.activePage === 'shoppingCartPage') {
      return <ShoppingCart 
      logout = {this.changePageToHomePage}
      items = {this.state.newItems} 
      buyItem = {this.buyItemFromCart}
      shipIt = {this.shipIt}
      />
    };

  }
}

export default App;