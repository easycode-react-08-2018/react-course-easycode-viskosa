import {createSelector} from 'reselect';

import {selectFilterText} from './select-filter-text';

/*export const selectFilteredUsers = (state) => { 	// это без reselect
	const filteredText = selectFilteredText(state);
	const users = state.users;

	return users.filter(user => user.name.includes(filteredText));
}*/

//=== с reselect ===================================
export const selectFilteredUsers = createSelector(
  [selectFilterText, (state) => state.users],
  (filteredText, users) => {
    return users.filter(user => user.name.includes(filteredText));
  },
);

//результат селектора selectFilterText возвращается в filteredText, 
// результат селектора (state) => state.users возвращается в users
// это называется реселект, он мемоизирует(запоминает) вызовы
// реселект запоминает результат вызова users.filter(user => user.name.includes(filteredText)), 
// запоминает результаты вызовов selectFilterText и (state) => state.users и возвращается
// та же ссылка, тот же рез-т и ничего не перерисовывается