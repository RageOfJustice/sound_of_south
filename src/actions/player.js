// @flow
import { createAction } from 'redux-actions'
import { APP_NAME } from '../constants'
import { buildActionName } from '../utils'

const actionPrefix = 'player'

const getActionName = buildActionName(APP_NAME, actionPrefix)

export const REQUEST_PLAY_TRACK = getActionName('REQUEST_PLAY_TRACK')
export const requestPlayTrack = createAction(REQUEST_PLAY_TRACK)

export const PLAY_TRACK = getActionName('PLAY_TRACK')
export const playTrack = createAction(PLAY_TRACK)

export const REQUEST_PAUSE_TRACK = getActionName('REQUEST_PAUSE_TRACK')
export const requestPauseTrack = createAction(REQUEST_PAUSE_TRACK)

export const PAUSE_TRACK = getActionName('PAUSE_TRACK')
export const pauseTrack = createAction(PAUSE_TRACK)

export const CHANGE_TRACK = getActionName('CHANGE_TRACK')
export const changeTrack = createAction(CHANGE_TRACK)

export const SET_FETCHING_TRACK = getActionName('SET_FETCHING_TRACK')
export const setFetchingTrack = createAction(SET_FETCHING_TRACK)

export const SET_PLAYLIST = getActionName('SET_PLAYLIST')
export const setPlaylist = createAction(SET_PLAYLIST)

export const REQUEST_PODCASTS = getActionName('REQUEST_PODCASTS')
export const requestPodcasts = createAction(REQUEST_PODCASTS)

export const RECEIVE_PODCASTS = getActionName('RECEIVE_PODCASTS')
export const receivePodcasts = createAction(RECEIVE_PODCASTS)

export const REFRESH_PODCASTS = getActionName('REFRESH_PODCASTS')
export const refreshPodcasts = createAction(REFRESH_PODCASTS)
