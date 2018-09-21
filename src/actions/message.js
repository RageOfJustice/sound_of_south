// @flow
import { createAction } from 'redux-actions'
import { APP_NAME } from '../constants'
import { buildActionName } from '../utils'

const actionPrefix = 'message'

const getActionName = buildActionName(APP_NAME, actionPrefix)

export const SEND_MESSAGE = getActionName('SEND_MESSAGE')
export const sendMessage = createAction(SEND_MESSAGE)
