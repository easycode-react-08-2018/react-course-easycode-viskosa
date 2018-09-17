import { ADD_SERVER } from '../../actions/';//по умолчанию будет искать в файле index в папке actions,
// а тот индекс смотрит на индекс в папке servers-actions
//import { ADD_SERVER } from '../../actions/servers-actions/add-server';// так лучше, так явно видно что откуда

// все стейты пишутся в редьюсреах!!!// тут сущность одного сервера
const initialState = [
	{
		name: 'Server #1',
	},
	{
		name: 'Server #2',
	},
];


export const serversReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_SERVER: {
			return [...state, action.payload.server];
		}
	}
}