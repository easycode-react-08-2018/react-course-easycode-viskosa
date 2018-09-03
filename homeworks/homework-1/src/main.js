import React from "react";
import ReactDOM from "react-dom";
import { users } from "./components/users.js";
import "bootstrap/dist/css/bootstrap.css";
import "../styl/index.styl";
require("webpack-icons-installer/bootstrap"); //load only bootstrap glyphicons

const mountNode = document.getElementById("app");

/*const clickHandle = (event) => {
	let target = event.target;

	if (target.classList.contains('btn-copy')) {
			console.log(target);
	}
}*/

const UserTableHeader = props => {
	return (
		<div className="panel-heading">
			<h3 className="panel-title">{props.name}</h3>
		</div>
	);
};

const UserTableAvatar = props => {
	return (
		<div className="col-md-3 col-lg-3 " align="center">
			<img src={props.avatar} className="pull-left" />
		</div>
	);
};

const Button = () => {
	return (
		<div className="btn-wrapper">
			<button className="btn-copy">Copy it!</button>
		</div>
	);
};

const UserTableBody = props => {
	let { birthdate, gender, address, email } = props.data;
	return (
		<table className="table table-user-information">
			<tbody>
				<tr>
					<td>Дата рождения</td>
					<td>{birthdate}</td>
				</tr>
				<tr>
					<td>Пол</td>
					<td>{gender}</td>
				</tr>
				<tr>
					<td>Адрес</td>
					<td>{address}</td>
				</tr>
				<tr>
					<td>Email</td>
					<td>
						<a href="#">{email}</a>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

const TableUsers = props => {
	let { users } = props;
	const main = users.map((item, i) => {
		let { avatarUrl, fullName } = item;

		return (
			<div key={i}>
				<UserTableHeader name={fullName} />
				<div className="panel-body">
					<div className="row">
						<div>
							<UserTableAvatar avatar={avatarUrl} />

							<div className="col-md-9 col-lg-9">
								<UserTableBody data={item} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return main;
};

const RenderHTML = props => {
	return (
		<div className="panel panel-info">
			<TableUsers users={props.users} />
			<Button /*onClick={clickHandle}*/ />
		</div>
	);
};

ReactDOM.render(<RenderHTML users={users} />, mountNode);
