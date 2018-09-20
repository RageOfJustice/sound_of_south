import R from 'ramda'

export const getPodcastState = R.prop('podcast')

export const getIsPodcastsFetching = R.pipe(
  getPodcastState,
  R.prop('isFetching'),
)

export const getPodcastsById = R.pipe(
  getPodcastState,
  R.prop('byId'),
)

export const getPodcastsAllIds = R.pipe(
  getPodcastState,
  R.prop('allIds'),
)

export const getSortedPodcasts = R.pipe(
  getPodcastsById,
  R.values,
  R.sortBy(R.prop('title')),
)
