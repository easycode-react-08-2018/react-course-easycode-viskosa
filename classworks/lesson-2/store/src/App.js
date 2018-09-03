import React, { Component } from "react";
import "./App.css";
import { HomePage } from "./pages/home-page.js";
import { AdminPage } from "./pages/admin-page.js";
import { UserPage } from "./pages/user-page.js";
import { ShoppingCart } from "./pages/shopping-cart-page.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      activePage: "homePage",
      inputValue: "",
      newItems: [],
      itemsInCart: []
      //isTicked: false,
      //isButton: true
    };
  }

  changePageToUserPage = () => {
    this.setState({
      activePage: "userPage"
    });
  };

  changePageToAdminPage = () => {
    this.setState({ activePage: "adminPage" });
  };

  changePageToShoppingPage = () => {
    this.setState({
      activePage: "shoppingCartPage"
    });
  };

  changePageToHomePage = () => {
    this.setState({
      activePage: "homePage"
    });
  };

  addItem = () => {
    if (!this.state.inputValue) {
      return;
    }

    const newItems = [...this.state.newItems, this.state.inputValue];
    this.setState({
      newItems,
      inputValue: ""
    });
  };

  buyItemFromUserPage = event => {
    //сразу все отмечаются галочками, это неправильно
    /*this.setState({
      isTicked: true,
      isButton: false
    })*/
    let item = event.target.previousElementSibling.textContent;

    const itemsInCart = [...this.state.itemsInCart, item];
    this.setState({
      itemsInCart
    });

    alert(item + " was added to the cart");
    console.log(itemsInCart);
  };

  inputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  shipIt = () => {
    console.log("Ship it!");
  };

  render() {
    const { activePage, inputValue, newItems, itemsInCart } = this.state;

    if (activePage === "homePage") {
      return (
        <HomePage
          changePageToAdmin={this.changePageToAdminPage}
          changePageToUser={this.changePageToUserPage}
        />
      );
    }

    if (activePage === "adminPage") {
      return (
        <AdminPage
          logout={this.changePageToHomePage}
          inputChange={this.inputChange}
          value={inputValue}
          add={this.addItem}
          items={newItems}
          goToCart={this.changePageToShoppingPage}
        />
      );
    }

    if (activePage === "userPage") {
      return (
        <UserPage
          logout={this.changePageToHomePage}
          items={newItems}
          goToCart={this.changePageToShoppingPage}
          buyItem={this.buyItemFromUserPage}
          //isTicked={this.state.isTicked}
          //isButton={this.state.isButton}
        />
      );
    }
    if (activePage === "shoppingCartPage") {
      return (
        <ShoppingCart
          logout={this.changePageToHomePage}
          itemsInCart={itemsInCart}
          shipIt={this.shipIt}
        />
      );
    }
  }
}

export default App;
