import React, { Component } from "react";

export class SearchBar extends Component {
  render() {
    return (
			<div className="cb-recepts__search-part fl fl-align-c fl-justify-b">
				<form action="#" method="post" name="signup">

					<div className="cb-recepts__search fl fl-align-c">
						<p className="">
							<input
								id="username"
								type="text"
								name="email"
								placeholder="Фрагмент имени или ингридиента"
								className="cb-input cb-input-search"
								/*onInput={inputChangeUser}*/
							/>

						</p>
						<p>
							<input 
								type="submit" 
								value="Найти" 
								className="cb-button"
								/*onClick={logIn}*/
							/>
						</p>	
					</div>

				</form>

				<button className="cb-main-text cb-button">Добавить рецепт</button>
				
			</div>
    );
  }
}

