import React, { Component } from 'react';
import { Header } from '../components/common/header.jsx'
import { Form } from '../components/login-page/form.jsx'

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

