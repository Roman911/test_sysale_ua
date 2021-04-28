import { combineReducers } from 'redux'
const reducers = [ 'cart', 'compare' ]

export default combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${ name }`).default
    return initial
  }, {})
)