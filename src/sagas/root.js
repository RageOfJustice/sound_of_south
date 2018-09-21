import { all, call } from 'redux-saga/effects'
import auth from './auth'
import player from './player'
import message from './message'
import navigation from './navigation'

export default function*() {
  yield all([call(auth), call(navigation), call(player), call(message)])
}
