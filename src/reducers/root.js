import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { default as auth } from './auth'

export default combineReducers({
  form,
  auth,
})
