import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
        <div className="cb-form__wrapper fl fl-dir-col">

	        <form action="#" method="post" name="signup">

				<fieldset>
					<h2 className="cb-form__welcome">Welcome to Flat Earth!</h2>
					<div class="cb-form__inner">
						<p className="fl fl-justify-b">
							<label htmlFor="username" className="cb-form__label">
								Username
							</label>
							<input
								id="username"
								type="text"
								name="email"
								placeholder="Enter User Name"
								className="cb-input"
								/*onInput={inputChangeUser}*/
							/>

						</p>
						<p className="fl fl-justify-b">
							<label htmlFor="password" className="cb-form__label">
								Password
							</label>
							<input
								id="password"
								type="password"
								name="password"
								placeholder="Password"
								className="cb-input"
								/*onInput={inputChangePassword}*/
							/>
						</p>

						<div className="cb-form__buttons-wrapper fl fl-justify-c fl-align-c">
							<p>
								<input 
									type="submit" 
									value="Sign in!" 
									className="cb-button"
									/*onClick={logIn}*/
								/>
							</p>	
							
							<p class="cb-form__checkbox">
								<input
									type="checkbox" 
									id="remember" 
									/*onClick={logIn}*/
								/>
								<label htmlFor="remember" className="cb-form__label-remember cb-form__label">
									Remember me!
								</label>
							</p>
						</div>
					</div>
					
				</fieldset>


			</form>

        </div>
    );
  }
}

