import R from 'ramda'

export const getPlayerState = R.prop('player')

export const getIsPaused = R.pipe(
  getPlayerState,
  R.prop('isPaused'),
)

export const getIsFetchingTrack = R.pipe(
  getPlayerState,
  R.prop('isFetchingTrack'),
)

export const getCurrentTrackId = R.pipe(
  getPlayerState,
  R.prop('currentTrackId'),
)

export const getPlaylist = R.pipe(
  getPlayerState,
  R.prop('playlist'),
)
