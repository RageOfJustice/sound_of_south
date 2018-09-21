import R from 'ramda'
import { connect } from 'react-redux'
import { MessageScreen } from '../screens'

const mapStateToProps = R.applySpec({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageScreen)
