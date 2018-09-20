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

export const getIsFetchingPlaylist = R.pipe(
  getPlayerState,
  R.prop('isFetchingPlaylist'),
)

export const getCurrentTrackId = R.pipe(
  getPlayerState,
  R.prop('currentTrackId'),
)

export const getPlaylist = R.pipe(
  getPlayerState,
  R.prop('playlist'),
)

export const getCurrentTrack = R.converge(
  (playlist, trackId) => R.find(R.propEq('podcastId', trackId), playlist),
  [R.getPlaylist, R.getCurrentTrackId],
)
