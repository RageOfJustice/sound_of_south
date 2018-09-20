// @flow
import { createAction } from 'redux-actions'
import { APP_NAME } from '../constants'
import { buildActionName } from '../utils'

const actionPrefix = 'podcasts'

const getActionName = buildActionName(APP_NAME, actionPrefix)

export const REQUEST_PODCASTS = getActionName('REQUEST_PODCASTS')
export const requestPodcasts = createAction(REQUEST_PODCASTS)

export const RECEIVE_PODCASTS = getActionName('RECEIVE_PODCASTS')
export const receivePodcasts = createAction(RECEIVE_PODCASTS)
