const Actions = {
  addToComparison: (data) => {
    return {
      type: 'COMPARE:ADD_TO_COMPARISON',
      payload: data
    }
  }
}

export default Actions