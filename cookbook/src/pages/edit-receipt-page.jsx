import React, { Component } from 'react';
import { Header } from '../components/common/header.jsx'
import { EditReceptContent } from '../components/edit-recept-page/edit-recept-content.jsx'

export class EditReceptPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <EditReceptContent />
      </React.Fragment>
    );
  }
}