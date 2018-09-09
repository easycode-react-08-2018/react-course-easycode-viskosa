import React from 'react';

export const CounterHOC = WrappedComponent => {
	return class CounterHOCClass extends React.Component {
		render() {
			return 
				( 
					<div>
						<button>+</button>
				        <button>-</button>
						<WrappedComponent {...this.props}/ >
				     </div>  
				)
		}
	}
}

/*
Напишите НОС который будет расширять верстку у компонента 
и добавлять 2 кнопки и счетчик
*/