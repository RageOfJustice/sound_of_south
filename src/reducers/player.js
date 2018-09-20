import R from 'ramda'
import { combineReducers } from 'redux'
import { handleActions, handleAction } from 'redux-actions'
import {
  LOGOUT,
  PLAY_TRACK,
  PAUSE_TRACK,
  RECEIVE_PODCASTS,
  REQUEST_PODCASTS,
  SET_FETCHING_TRACK,
} from '../actions'

const isPaused = handleActions(
  {
    [PAUSE_TRACK]: R.T,
    [PLAY_TRACK]: R.F,
  },
  true,
)

const isFetchingTrack = handleAction(
  SET_FETCHING_TRACK,
  (_, { payload }) => payload,
  false,
)

const isFetchingPlaylist = handleActions(
  {
    [REQUEST_PODCASTS]: R.T,
    [RECEIVE_PODCASTS]: R.F,
  },
  false,
)

const playlist = handleActions(
  {
    [RECEIVE_PODCASTS]: (_, { payload }) => payload,
    [LOGOUT]: R.always([]),
  },
  [],
)

const currentTrackId = handleAction(PLAY_TRACK, (_, { payload }) => payload, '')

export default combineReducers({
  isPaused,
  playlist,
  currentTrackId,
  isFetchingTrack,
  isFetchingPlaylist,
})
