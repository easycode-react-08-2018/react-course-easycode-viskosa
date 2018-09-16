export const incrementPlus = (val) => {
	console.log(val)
	return {
		type: 'INCREMENTPLUS',
		payload: val	//payload - это название по контрактам редакса
	}
}
// это action, который придет в dispatch, а потом в reducer