// @flow
import R from 'ramda'
import { call, takeLatest, put, all, select } from 'redux-saga/effects'
import {
  CHANGE_TRACK,
  REQUEST_PODCASTS,
  REQUEST_PLAY_TRACK,
  REQUEST_PAUSE_TRACK,
  playTrack,
  pauseTrack,
  receivePodcasts,
  requestPlayTrack,
  requestPauseTrack,
  REFRESH_PODCASTS,
} from '../actions'
import {
  getToken,
  getPlaylist,
  getNextTrack,
  getPreviousTrack,
} from '../selectors'
import { getPodcasts } from '../managers'

const playTrackWorker = function*({ payload: trackId }) {
  const playlist = yield select(getPlaylist)
  const track = R.find(R.propEq('podcastId', trackId), playlist)
  if (track) {
    yield put(playTrack(trackId))
  }
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

const requestPodcastsWorker = function*() {
  let podcasts = {}
  try {
    const token = yield select(getToken)
    podcasts = yield call(getPodcasts, token)
    podcasts = R.sortBy(R.prop('title'), podcasts)
  } catch (error) {
    // TODO: handle
    // console.log(error)
  }
  yield put(receivePodcasts(podcasts))
}

const requestPodcastsWatcher = function*() {
  yield takeLatest([REQUEST_PODCASTS, REFRESH_PODCASTS], requestPodcastsWorker)
}

const changeTrackWorker = function*({ payload: nextTrack }) {
  yield put(requestPauseTrack())
  const selector = nextTrack ? getNextTrack : getPreviousTrack
  const { podcastId } = yield select(selector)
  yield put(requestPlayTrack(podcastId))
}

const changeTrackWatcher = function*() {
  yield takeLatest(CHANGE_TRACK, changeTrackWorker)
}

export default function*() {
  yield all([
    call(playTrackWatcher),
    call(pauseTrackWatcher),
    call(changeTrackWatcher),
    call(requestPodcastsWatcher),
  ])
}
