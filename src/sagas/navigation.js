// @flow
import R from 'ramda'
import { all, call, takeLatest } from 'redux-saga/effects'
import { SET_NAVIGATION, NAVIGATE, GO_BACK } from '../actions'
import { setNavigator, navigate, goBack } from '../managers'

const setNavigatorWorker = function*({ payload: navigation }) {
  yield call(setNavigator, navigation)
}

const setNavigatorWatcher = function*() {
  yield takeLatest(SET_NAVIGATION, setNavigatorWorker)
}

const navigateWorker = function*({ payload }) {
  if (R.is(String, payload)) {
    yield call(navigate, payload)
  } else {
    yield call(navigate, ...payload)
  }
}

const navigateWatcher = function*() {
  yield takeLatest(NAVIGATE, navigateWorker)
}

const goBackWorker = function*({ payload: key }) {
  yield call(goBack, key)
}

const goBackWatcher = function*() {
  yield takeLatest(GO_BACK, goBackWorker)
}

export default function*() {
  yield all([
    call(setNavigatorWatcher),
    call(navigateWatcher),
    call(goBackWatcher),
  ])
}
