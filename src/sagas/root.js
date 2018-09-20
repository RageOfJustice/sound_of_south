import { all, call } from 'redux-saga/effects'
import auth from './auth'
import podcast from './podcast'
import navigation from './navigation'

export default function*() {
  yield all([call(auth), call(navigation), call(podcast)])
}
