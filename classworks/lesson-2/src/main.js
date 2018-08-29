import React from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('app');

/*ReactDOM.render(<h1>Hello world</h1>, mountNode);*/

/*Напишите счетчик, который будет каждую секунду обновляться в ДОМ при помощи реакт и реактДОМ*/

/*let counter = 0;


setInterval( () => {
	ReactDOM.render(<h1>${counter++}</h1>, mountNode);

}, 1000)*/

	
/*const HelloWorld = (props) => {
	console.log('props', props);
	return <h1>Hello world {props.userName}</h1>
}

ReactDOM.render(<HelloWorld userName="Easycode student"/>, mountNode)*/

let list = ['Vue', 'Angular', 'React'];
const frameworks = list.map((item, i) => {
	return <li key={i}>{item}</li>
});

const ShowFrameworks = () => {

	return (
		<ul>
			{frameworks}
		</ul>
		)
	
}

ReactDOM.render(<ShowFrameworks/>, mountNode)
