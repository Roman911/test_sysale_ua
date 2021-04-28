const Actions = {
  addToCart: (data) => {
    return {
      type: 'CART:ADD_TO_CART',
      payload: data
    }
  },
  removeToCart: (id) => {
    return {
      type: 'CART:REMOVE_TO_CART',
      payload: id
    }
  }
}

export default Actions