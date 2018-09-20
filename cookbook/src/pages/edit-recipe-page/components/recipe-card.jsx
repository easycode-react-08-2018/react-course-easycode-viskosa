import React, { Component } from "react";
//import {image} from '../../img/svinaya_rulka.jpg';
import { IngredientItem } from './ingredient-item.jsx'

export class RecipeCard extends Component {
  render() {
    return (
	    <div className="cb-card__wrapper fl fl-justify-b">
		    <div className="cb-card__img-part fl fl-dir-col">
		    	<div className="cb-card__img-wrapper">
		    		<img src="../../img/svinaya_rulka.jpg" alt="" className="cb-item__img"/>
		    	</div>
		    	<div className="cb-card__buttons-wrap">
		    		<button className="cb-button cb-card__button--add">Загрузить</button>
		    		<button className="cb-button cb-card__button--remove">Удалить</button>
		    	</div>
		    </div >
		    	

		    <div className="cb-card__text-part fl fl-dir-col">
		    	<h3>Название</h3>
		    	<div className="cd-card__search-part">
	    			<p className="fl">
						<label htmlFor="ingridient" className="cb-form__label">
							Название
						</label>
						<input
							id="ingridient"
							type="text"
							name="ingridient"
							placeholder="Название"
							className="cb-input cb-card__input-name"
							/*onInput={inputChangeUser}*/
						/>
					</p>
		    	</div>
		    	<div className="cd-card__ingridients-part fl fl-justify-b">
		    		<p>Список ингридиентов</p>
		    		<div className="cb-card__ingridients-wrapper cb-card__ingridients-wrapper--all">
		    			<IngredientItem />
						<IngredientItem />
						<IngredientItem />
		    		</div>

		    		<div className="cb-card-ingridient-buttons-wrap fl fl-dir-col fl-justify-c">
		    			<button className="cb-button cb-card__button--left">&lt;</button>
		    			<button className="cb-button cb-card__button--right">&gt;</button>
		    		</div>

		    		<div className="cb-card__ingridients-wrapper cb-card__ingridients-wrapper--selected">
		    			<IngredientItem />
						<IngredientItem />
						<IngredientItem />
		    		</div>		    		
		    	</div>
		    </div>
		</div>  
        
    );
  }
}