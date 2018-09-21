// @flow
import R from 'ramda'
import { call, takeLatest, put, all } from 'redux-saga/effects'
import {
  LOGOUT,
  CHECK_TOKEN,
  REQUEST_AUTH,
  login,
  setToken,
  requestPodcasts,
  requestPauseTrack,
} from '../actions'
import {
  stopSubmit,
  startSubmit,
  setSubmitFailed,
  setSubmitSucceeded,
} from 'redux-form'
import { authorize, navigate } from '../managers'
import { FORMS } from '../constants'
import {
  getToken,
  getUsername,
  setUsername,
  removeToken,
  removeUsername,
  setToken as saveToken,
} from '../repositories'

const loginWorker = function*(token: string, username?: string) {
  yield call(navigate, 'Podcasts')
  if (!username) {
    username = yield call(getUsername)
  } else {
    yield call(setUsername, username)
  }
  yield all([call(saveToken, token), put(setToken(token))])
  yield put(login(username))
  yield put(requestPodcasts())
}

const requestAuthWorker = function*({ payload: { username, password } }) {
  try {
    yield put(startSubmit(FORMS.AUTH))
    const data = yield call(authorize, username, password)
    if (!data.error) {
      yield call(loginWorker, data.accessToken, username)
      yield put(setSubmitSucceeded(FORMS.AUTH))
      yield put(stopSubmit(FORMS.AUTH))
    } else {
      yield put(setSubmitFailed(FORMS.AUTH))
      yield put(
        stopSubmit(FORMS.AUTH, { ...R.pick(['username', 'password'], data) }),
      )
    }
  } catch (error) {
    yield put(setSubmitFailed(FORMS.AUTH))
    yield put(
      stopSubmit(FORMS.AUTH, {
        username: 'Неизвестная ошибка',
        password: 'Неизвестная ошибка',
      }),
    )
  }
}

const requestAuthWatcher = function*() {
  yield takeLatest(REQUEST_AUTH, requestAuthWorker)
}

const logoutWorker = function*() {
  yield put(requestPauseTrack())
  yield all([call(removeToken), call(removeUsername)])
  yield call(navigate, 'Login')
}

const logoutWatcher = function*() {
  yield takeLatest(LOGOUT, logoutWorker)
}

const checkTokenWorker = function*() {
  const token = yield call(getToken)
  if (token) {
    yield call(loginWorker, token)
  }
}

const checkTokenWatcher = function*() {
  yield takeLatest(CHECK_TOKEN, checkTokenWorker)
}

export default function*() {
  yield all([
    call(logoutWatcher),
    call(checkTokenWatcher),
    call(requestAuthWatcher),
  ])
}
