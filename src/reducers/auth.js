import R from 'ramda'
import { combineReducers } from 'redux'
import { handleActions, handleAction } from 'redux-actions'
import { LOGIN, LOGOUT, SET_TOKEN } from '../actions'

const isAuthorized = handleActions(
  {
    [LOGIN]: R.T,
    [LOGOUT]: R.F,
  },
  false,
)

const username = handleAction(LOGIN, (_, { payload }) => payload, '')

const token = handleAction(SET_TOKEN, (_, { payload }) => payload, '')

export default combineReducers({ isAuthorized, username, token })
