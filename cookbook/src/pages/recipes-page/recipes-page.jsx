import React, { Component } from 'react';
import { Header } from '../../components/common/header.jsx'
import { RecipesContent } from './components/recipes-content.jsx'

export class RecipesPage extends Component {
  render() {
    return (
      <React.Fragment>
        <RecipesContent />
      </React.Fragment>
    );
  }
}