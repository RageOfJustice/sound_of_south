// @flow
import { createAction } from 'redux-actions'
import { APP_NAME } from '../constants'
import { buildActionName } from '../utils'

const actionPrefix = 'auth'

const getActionName = buildActionName(APP_NAME, actionPrefix)

export const REQUEST_AUTH = getActionName('REQUEST_AUTH')
export const requestAuth = createAction(REQUEST_AUTH)

export const LOGIN = getActionName('LOGIN')
export const login = createAction(LOGIN)

export const LOGOUT = getActionName('LOGOUT')
export const logout = createAction(LOGOUT)
