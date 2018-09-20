import R from 'ramda'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { LOGIN, LOGOUT } from '../actions'

const isAuthorized = handleActions(
  {
    [LOGIN]: R.T,
    [LOGOUT]: R.F,
  },
  false,
)

export default combineReducers({ isAuthorized })
