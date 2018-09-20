//import { AUTH } from '../../actions/';//по умолчанию будет искать в файле index в папке actions,
// а тот индекс смотрит на индекс в папке auth
import { AUTH } from '../../actions/auth/auth.action.js';
// все стейты пишутся в редьюсреах!!!
//console.log('AUTH', AUTH);
const initialState = { login: ''};

export const authReducer = (state = initialState, action) => {
	console.log('state:', state, 'action:', action)
	switch (action.type) {
		case AUTH: {
			return {
				...state, 
				login: action.payload.login
			};
		}
		default: {		//обязательно дефолтный стейт
			return state 
		}	
	}
}