import R from 'ramda'
import { connect } from 'react-redux'
import { TrackItem } from '../components'
import {
  getIsPaused,
  getCurrentTrackId,
  getIsFetchingTrack,
} from '../selectors'
import { requestPlayTrack, requestPauseTrack } from '../actions'

const mapStateToProps = R.applySpec({
  isPaused: getIsPaused,
  isFetching: getIsFetchingTrack,
  playingTrackId: getCurrentTrackId,
})

const mapDispatchToProps = {
  playTrack: requestPlayTrack,
  pauseTrack: requestPauseTrack,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackItem)
