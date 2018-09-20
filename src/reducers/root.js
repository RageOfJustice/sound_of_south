import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { default as auth } from './auth'
import { default as player } from './player'
import { default as podcast } from './podcast'

export default combineReducers({
  form,
  auth,
  player,
  podcast,
})
