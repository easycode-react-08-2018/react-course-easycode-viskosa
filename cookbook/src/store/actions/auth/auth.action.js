//action creator-------------------

export const AUTH = "AUTH"; // это чтобы случайно не сделать ошибку в названии
// если потом переименуем, то это сразу изменится и в редьюсере, и в экшене
export const LOGOUT = "LOGOUT";

export const doAuth = login => {
	//сюда придет объект из login-page.js // {login: "Nataly"}
	return {
		type: AUTH,
		payload: {
			login
		}
	};
};

export const logOut = login => {
	return {
		type: LOGOUT,
		payload: {
			login
		}
	};
};
//все это уходит в диспатчер, а потом в редьюсер
