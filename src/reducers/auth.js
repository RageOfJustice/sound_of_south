import R from 'ramda'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { REQUEST_AUTH, RECEIVE_AUTH, LOGOUT } from '../actions'

const isFetching = handleActions(
  {
    [REQUEST_AUTH]: R.T,
    [RECEIVE_AUTH]: R.F,
  },
  false,
)

const isAuthorized = handleActions(
  {
    [RECEIVE_AUTH]: R.T,
    [LOGOUT]: R.F,
  },
  false,
)

export default combineReducers({ isFetching, isAuthorized })
