import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { default as auth } from './auth'
import { default as player } from './player'

export default combineReducers({
  form,
  auth,
  player,
})
