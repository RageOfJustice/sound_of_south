import R from 'ramda'
import { combineReducers } from 'redux'
import { handleActions, handleAction } from 'redux-actions'
import {
  LOGOUT,
  PLAY_TRACK,
  PAUSE_TRACK,
  SET_PLAYLIST,
  REQUEST_PLAY_TRACK,
  SET_FETCHING_TRACK,
} from '../actions'

const isPaused = handleActions(
  {
    [PAUSE_TRACK]: R.T,
    [PLAY_TRACK]: R.F,
  },
  true,
)

const isFetching = handleAction(
  SET_FETCHING_TRACK,
  (_, { payload }) => payload,
  false,
)

const playlist = handleActions(
  {
    [SET_PLAYLIST]: (_, { payload }) => payload,
    [LOGOUT]: R.always([]),
  },
  [],
)

const currentTrackId = handleAction(
  REQUEST_PLAY_TRACK,
  (_, { payload }) => payload,
  '',
)

export default combineReducers({
  isPaused,
  playlist,
  isFetching,
  currentTrackId,
})
