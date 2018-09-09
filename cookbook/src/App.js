import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginPage } from './pages/login-page.jsx';
import { ReceptsPage } from './pages/receipts-page.jsx';
import { EditReceptPage } from './pages/edit-receipt-page.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cb__wrapper">
          <ReceptsPage />
        </div> 
      </div>
    );
  }
}

export default App;
