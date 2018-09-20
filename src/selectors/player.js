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
  (playlist, trackId) => R.find(R.propEq('podcastId', trackId), playlist) || {},
  [getPlaylist, getCurrentTrackId],
)

export const getCurrentTrackIndex = R.converge(
  (playlist, trackId) => R.findIndex(R.propEq('podcastId', trackId), playlist),
  [getPlaylist, getCurrentTrackId],
)

export const getNextTrack = R.converge(
  (playlist, index) => (index + 1 < playlist.length ? playlist[index + 1] : {}),
  [getPlaylist, getCurrentTrackIndex],
)

export const getPreviousTrack = R.converge(
  (playlist, index) => (index - 1 >= 0 ? playlist[index - 1] : {}),
  [getPlaylist, getCurrentTrackIndex],
)
