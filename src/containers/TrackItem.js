import R from 'ramda'
import { connect } from 'react-redux'
import { TrackItem } from '../components'
import { getIsPaused } from '../selectors'
import { requestPlayTrack, requestPauseTrack } from '../actions'

const mapStateToProps = R.applySpec({
  isPaused: getIsPaused,
})

const mapDispatchToProps = {
  playTrack: requestPlayTrack,
  pauseTrack: requestPauseTrack,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackItem)
