import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//import { Input } from "./components/input.js";
//import { Button } from "./components/button.js";
import { Box } from "./components/resizedBox.js";

const url = 'https://api.github.com';

class App extends Component {
    constructor() {
        super();

        this.state = {
          blockStyle : {
            width: '400px',
            height: '400px',
            background: 'pink',
            margin: '50px auto'
          }
          //inputValue: ""
        };
    }

    /*inputChange = event => {
        this.setState({
            inputValue: event.target.value
        });
    };
    fetchOrganization = () => {
      fetch(url).then(response => response.json())
      .then(user => {
        console.log(user.name);
      })
    }
    fetchRepozitories = () => {
      fetch(url).then(response => response.json())
      .then(repos => {
        console.log(repos);
      })
    }*/

    render() {
        const { blockStyle } = this.state;

        return (
            <main className="container">
                <Box style={blockStyle}/>
            </main>
        );
    }
}

export default App;

 /* return (
      <main className="container">
          <Input inputChange={this.inputChange} value={inputValue} />
          <Button onClick={this.fetchRepozitories} text={Get Repositories}/>
          <Button onClick={this.fetchOrganization} text={Get Organizations}/>

      </main>
  );*/