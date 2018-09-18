import { all, call } from 'redux-saga/effects'
import navigation from './navigation'

export default function*() {
  yield all([call(navigation)])
}
