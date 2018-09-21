import R from 'ramda'

export const getAuthState = R.prop('auth')

export const getIsAuthorized = R.pipe(
  getAuthState,
  R.prop('isAuthorized'),
)

export const getToken = R.pipe(
  getAuthState,
  R.prop('token'),
)
