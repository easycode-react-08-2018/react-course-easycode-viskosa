import React, { Component } from "react";
import { RecipesWrapper }  from '../../../components/common/recipes-wrapper.jsx'
import { SearchBar }  from './search-bar.jsx'
import { RecipeItem }  from './recipe-item.jsx'

export class RecipesContent extends Component {
  render() {
    return (
        <RecipesWrapper>
			<SearchBar />
			<div className="cb-recepts__items-wrapper">
				<RecipeItem />
				<RecipeItem />
				<RecipeItem />
			</div>
        </RecipesWrapper>
        
    );
  }
}

