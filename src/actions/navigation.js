// @flow
import { createAction } from 'redux-actions'
import { APP_NAME } from '../constants'
import { buildActionName } from '../utils'

const actionPrefix = 'navigation'

const getActionName = buildActionName(APP_NAME, actionPrefix)

export const SET_NAVIGATION = getActionName('SET_NAVIGATION')
export const setNavigation = createAction(SET_NAVIGATION)

export const NAVIGATE = getActionName('NAVIGATE')
export const navigate = createAction(NAVIGATE)

export const GO_BACK = getActionName('GO_BACK')
export const goBack = createAction(GO_BACK)
