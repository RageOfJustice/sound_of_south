import R from 'ramda'
import { connect } from 'react-redux'
import { PodcastsScreen } from '../screens'
import { navigate, requestPodcasts } from '../actions'
import { getPlaylist, getIsFetchingPlaylist } from '../selectors'

const mapStateToProps = R.applySpec({
  podcasts: getPlaylist,
  isFetching: getIsFetchingPlaylist,
})

const mapDispatchToProps = {
  navigate,
  requestPodcasts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PodcastsScreen)
