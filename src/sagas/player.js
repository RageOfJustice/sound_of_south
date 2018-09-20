// @flow
import { call, takeLatest, put, all } from 'redux-saga/effects'
import {
  REQUEST_PLAY_TRACK,
  REQUEST_PAUSE_TRACK,
  playTrack,
  pauseTrack,
} from '../actions'

const playTrackWorker = function*() {
  yield put(playTrack())
}

const playTrackWatcher = function*() {
  yield takeLatest(REQUEST_PLAY_TRACK, playTrackWorker)
}

const pauseTrackWorker = function*() {
  yield put(pauseTrack())
}

const pauseTrackWatcher = function*() {
  yield takeLatest(REQUEST_PAUSE_TRACK, pauseTrackWorker)
}

export default function*() {
  yield all([call(playTrackWatcher), call(pauseTrackWatcher)])
}
