import R from 'ramda'
import { connect } from 'react-redux'
import { PodcastsScreen } from '../screens'
import { navigate, requestPodcasts } from '../actions'
import { getSortedPodcasts, getIsPodcastsFetching } from '../selectors'

const mapStateToProps = R.applySpec({
  podcasts: getSortedPodcasts,
  isFetching: getIsPodcastsFetching,
})

const mapDispatchToProps = {
  navigate,
  requestPodcasts,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PodcastsScreen)
