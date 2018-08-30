import React from "react";
import ReactDOM from "react-dom";
import {users} from "./components/users.js";
import '../styl/index.styl';

const mountNode = document.getElementById("app");

const UserTableHeader = (props) => {
	return (
		<div className="panel-heading">
			<h3 className="panel-title">{props.data}</h3>
		</div>
	);
};

const UserTableAvatar = (props) => {
	return (
		<div className="col-md-3 col-lg-3 " align="center">
          <img src="{props.data}" className="pull-left"/>
        </div>
	);
};

const UserTableBody = (props) => {

	return (
				<table className="table table-user-information">
  		           <tbody>
  		             <tr>
  		               <td>Дата рождения</td>
  		               <td>{props.data.birthdate}</td>
  		             </tr>
  		             <tr>
  		               <td>Пол</td>
  		               <td>{props.data.gender}</td>
  		             </tr>
  		             <tr>
  		               <td>Адрес</td>
  		               <td>{props.data.address}</td>
  		             </tr>
  		             <tr>
  		               <td>Email</td>
  		               <td><a href='#'>{props.data.email}</a></td>
  		             </tr>
  		           </tbody>
  		      	</table>   
			)
};

const RenderTable = (props) => {

	const main =  props.data.users.map ((item, i) => {

		let {avatarUrl, fullName, ...rest} = item;

		return (
				<div key = {i}>
				
					<UserTableHeader data = {item.fullName}/>

					<div className="panel-body">
					   <div className="row">

						   	<div>
						   		<UserTableAvatar data = {item.avatarUrl}/>

								<div className="col-md-9 col-lg-9">
									<UserTableBody data = {item}/>
								</div>

							</div>	

						</div>
					</div>

				</div>
			)

	})

	return main;
};

const RenderHTML = (props) => {
	return (
		<div className="panel panel-info">

			<RenderTable data = {props}/>

			<div className= "btn-wrapper">
				<button className = "btn-copy">Copy it!</button>
			</div>

		</div>
	)

}

ReactDOM.render(<RenderHTML users={users} />, mountNode);
