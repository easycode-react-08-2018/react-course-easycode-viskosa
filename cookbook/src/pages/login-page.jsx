import React, { Component } from 'react';
import { Header } from '../components/header.jsx'
import { Form } from '../components/form.jsx'

export class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Form />
      </React.Fragment>
    );
  }
}

