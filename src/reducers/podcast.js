import R from 'ramda'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { LOGOUT, REQUEST_PODCASTS, RECEIVE_PODCASTS } from '../actions'

const byId = handleActions(
  {
    [RECEIVE_PODCASTS]: R.useWith(R.mergeDeepRight, [
      R.identity,
      R.prop('payload'),
    ]),
    [LOGOUT]: R.always({}),
  },
  {},
)

const allIds = handleActions(
  {
    [RECEIVE_PODCASTS]: R.useWith(R.union, [
      R.identity,
      R.pipe(
        R.prop('payload'),
        R.keys,
      ),
    ]),
    [LOGOUT]: R.always({}),
  },
  {},
)

const isFetching = handleActions(
  {
    [REQUEST_PODCASTS]: R.T,
    [RECEIVE_PODCASTS]: R.F,
  },
  false,
)

export default combineReducers({
  byId,
  allIds,
  isFetching,
})
