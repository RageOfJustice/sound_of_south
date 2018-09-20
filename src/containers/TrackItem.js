import R from 'ramda'
import { connect } from 'react-redux'
import { TrackItem } from '../components'
import { withTheme } from 'styled-components'

const mapStateToProps = R.applySpec({})

const mapDispatchToProps = {}

export default R.compose(
  withTheme,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(TrackItem)
