export const incrementPlus = (val) => {
	console.log(val)
	return {
		type: 'INCREMENTPLUS',
		value: val
	}
}