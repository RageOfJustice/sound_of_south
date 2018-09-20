// @flow
import R from 'ramda'
import { call, takeLatest, put, all } from 'redux-saga/effects'
import { REQUEST_PODCASTS, receivePodcasts } from '../actions'
import { getPodcasts } from '../managers'

const requestPodcastsWorker = function*() {
  let podcasts = {}
  try {
    podcasts = yield call(getPodcasts)
    podcasts = R.indexBy(R.prop('podcastId'), podcasts)
  } catch (error) {
    // TODO: handle
  }
  yield put(receivePodcasts(podcasts))
}

const requestPodcastsWatcher = function*() {
  yield takeLatest(REQUEST_PODCASTS, requestPodcastsWorker)
}

export default function*() {
  yield all([call(requestPodcastsWatcher)])
}
