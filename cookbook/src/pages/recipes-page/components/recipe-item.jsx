import React, { Component } from "react";

export class RecipeItem extends Component {
  render() {
    return (
			<div className="cb-recepts__item fl fl-justify-b">
				<div className="cb-item__img-part">
					<img className="cb-item__img" src="" alt="img" />
				</div>

				<div className="cb-item__ingridients-part">
					<h3>Recept Name</h3>
					<ol>
						<li>ингридиент</li>
						<li>ингридиент</li>
						<li>ингридиент</li>
						<li>ингридиент</li>
					</ol>
				</div>

				<div className="cb-item__resume-part fl">
					<p>Всего ингридиентов: <span>5</span></p>
				</div>

				<div className="cb-item__buttons-part fl fl-dir-col fl-justify-b">
					<button className="cb-main-text cb-button">Редактировать</button>
					<button className="cb-main-text cb-button">Удалить</button>
				</div>

			</div>
    );
  }
}