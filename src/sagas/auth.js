// @flow
import { call, takeLatest, put, all } from 'redux-saga/effects'
import { LOGOUT, REQUEST_AUTH, login, logout } from '../actions'
import {
  stopSubmit,
  startSubmit,
  setSubmitFailed,
  setSubmitSucceeded,
} from 'redux-form'
import { authorize, navigate } from '../managers'
import { FORMS } from '../constants'

const requestAuthWorker = function*({
  payload: { login: userName, password },
}) {
  try {
    yield put(startSubmit(FORMS.AUTH))
    const isOk = yield call(authorize, userName.trim(), password)
    if (isOk) {
      yield call(navigate, 'Podcasts')
      yield put(login())
      yield put(setSubmitSucceeded(FORMS.AUTH))
      yield put(stopSubmit(FORMS.AUTH))
    }
  } catch (error) {
    // TODO: add handler
    yield put(setSubmitFailed(FORMS.AUTH))
    yield put(stopSubmit(FORMS.AUTH))
  }
}

const requestAuthWatcher = function*() {
  yield takeLatest(REQUEST_AUTH, requestAuthWorker)
}

const logoutWorker = function*() {
  yield put(logout())
}

const logoutWatcher = function*() {
  yield takeLatest(LOGOUT, logoutWorker)
}

export default function*() {
  yield all([call(requestAuthWatcher), call(logoutWatcher)])
}
