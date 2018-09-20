import React, { Component } from 'react';
import { Header } from '../../components/common/header.jsx'
import { EditRecipeContent } from './components/edit-recipe-content.jsx'

export class EditRecipePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <EditRecipeContent />
      </React.Fragment>
    );
  }
}