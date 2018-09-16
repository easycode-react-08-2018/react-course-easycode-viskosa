export const decrement = (value) => ({
      type: 'DECREMENT',
      value: value
})

// это action, который придет в dispatch, а потом в reducer