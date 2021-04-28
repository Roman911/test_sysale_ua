const initialState = {
  cart: []
}

const directionLocations = (state = initialState, actions) => {
  switch (actions.type) {
    case 'CART:ADD_TO_CART':
      return {
        ...state,
        cart: state.cart.concat(actions.payload)
      }
    case 'CART:REMOVE_TO_CART':
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== actions.payload)
      }
    default:
      return state
  }
}

export default directionLocations