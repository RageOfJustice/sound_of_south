import R from 'ramda'

export const getAuthState = R.prop('auth')

export const getIsAuthFetching = R.pipe(
  getAuthState,
  R.prop('isFetching'),
)

export const getIsAuthorized = R.pipe(
  getAuthState,
  R.prop('isAuthorized'),
)
