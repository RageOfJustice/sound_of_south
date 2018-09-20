import R from 'ramda'
import { connect } from 'react-redux'
import { Player } from '../components'
import { getIsFetchingTrack, getIsPaused, getCurrentTrack } from '../selectors'
import { setFetchingTrack } from '../actions'

const mapStateToProps = R.applySpec({
  isPaused: getIsPaused,
  currentTrack: getCurrentTrack,
  isFetching: getIsFetchingTrack,
})

const mapDispatchToProps = { setFetchingTrack }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Player)
