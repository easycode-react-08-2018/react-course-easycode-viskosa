import React, { Component } from 'react';
import { Header } from '../components/common/header.jsx'
import { ReceptsContent } from '../components/recepts-page/recepts-content.jsx'

export class ReceptsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <ReceptsContent />
      </React.Fragment>
    );
  }
}