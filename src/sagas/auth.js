// @flow

import { call, takeLatest, put } from 'redux-saga/effects'
import { REQUEST_AUTH, receiveAuth } from '../actions'
import { authorize, navigate } from '../managers'

const requestAuthWorker = function*({ payload: { login, password } }) {
  try {
    const isOk = yield call(authorize, login, password)
    if (isOk) {
      yield call(navigate, 'Podcasts')
      yield put(receiveAuth())
    }
  } catch (error) {
    // TODO: add handler
    yield put(receiveAuth())
  }
}

const requestAuthWatcher = function*() {
  yield takeLatest(REQUEST_AUTH, requestAuthWorker)
}

export default function*() {
  yield call(requestAuthWatcher)
}
