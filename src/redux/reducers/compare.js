const initialState = {
  compare: []
}

const directionLocations = (state = initialState, actions) => {
  switch (actions.type) {
    case 'COMPARE:ADD_TO_COMPARISON':
      return {
        ...state,
        compare: state.compare.concat(actions.payload)
      }
    default:
      return state
  }
}

export default directionLocations