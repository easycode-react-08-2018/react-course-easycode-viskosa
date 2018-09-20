import React, { Component } from "react";
import { RecipesWrapper }  from '../../../components/common/recipes-wrapper.jsx'
import { RecipeCard }  from './recipe-card.jsx';

export class EditRecipeContent extends Component {
  render() {
    return (
        <RecipesWrapper>
        	<RecipeCard />
        </RecipesWrapper>
        
    );
  }
}
