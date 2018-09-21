// @flow
import R from 'ramda'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  stopSubmit,
  startSubmit,
  setSubmitFailed,
  setSubmitSucceeded,
} from 'redux-form'
import { SEND_MESSAGE } from '../actions'
import { FORMS } from '../constants'
import { sendMessage } from '../managers'

const sendMessageWorker = function*({ payload: { topic, message } }) {
  try {
    yield put(startSubmit(FORMS.MESSAGE))
    const data = yield call(sendMessage, topic, message)
    if (!data.error) {
      yield put(setSubmitSucceeded(FORMS.MESSAGE))
      yield put(stopSubmit(FORMS.MESSAGE))
    } else {
      yield put(setSubmitFailed(FORMS.MESSAGE))
      yield put(
        stopSubmit(FORMS.MESSAGE, { ...R.pick(['topic', 'message'], data) }),
      )
    }
  } catch (error) {
    yield put(setSubmitFailed(FORMS.MESSAGE))
    yield put(
      stopSubmit(FORMS.MESSAGE, {
        username: 'Неизвестная ошибка',
        password: 'Неизвестная ошибка',
      }),
    )
  }
}

const sendMessageWatcher = function*() {
  yield takeLatest(SEND_MESSAGE, sendMessageWorker)
}

export default function*() {
  yield all([call(sendMessageWatcher)])
}
