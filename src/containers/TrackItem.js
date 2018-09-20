import R from 'ramda'
import { connect } from 'react-redux'
import { TrackItem } from '../components'
import { withTheme } from 'styled-components'
import { getIsPaused } from '../selectors'
import { requestPlayTrack, requestPauseTrack } from '../actions'

const mapStateToProps = R.applySpec({
  isPaused: getIsPaused,
})

const mapDispatchToProps = {
  playTrack: requestPlayTrack,
  pauseTrack: requestPauseTrack,
}

export default R.compose(
  withTheme,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TrackItem)
