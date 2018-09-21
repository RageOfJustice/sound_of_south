import R from 'ramda'
import { connect } from 'react-redux'
import { PodcastsScreen } from '../screens'
import { navigate, refreshPodcasts } from '../actions'
import {
  getPlaylist,
  getIsFetchingPlaylist,
  getIsRefreshingPlaylist,
} from '../selectors'

const mapStateToProps = R.applySpec({
  podcasts: getPlaylist,
  isFetching: getIsFetchingPlaylist,
  isRefreshing: getIsRefreshingPlaylist,
})

const mapDispatchToProps = {
  navigate,
  refreshPodcasts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PodcastsScreen)
