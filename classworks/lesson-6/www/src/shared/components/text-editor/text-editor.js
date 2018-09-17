import React from "react";
//ГЛУПЫЙ КОМПОНЕНЕТ
/*
TextEditor будет принимать пропсы:
value,
onChange, т.к. когда будем что-то редактировать,то нужно будет из инпута забрать введенное значение
isInEditMode - в каком состоянии находится текст
className - класс

*/
export class TextEditor extends React.Component {
	render() {
		const { value, onChange, isInEditMode, className } = this.props;
		if (isInEditMode) { //если пришла пропса isInEditMode - верни инпут
			return (
				<input
					type=""
					name=""
					value={value}
					className={className}
					onChange={onChange}
				/>
			);
		}

		return <span className={className}>{value}</span>; // в остальных случаюх верни спан
	}
}
