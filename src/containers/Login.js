import { connect } from 'react-redux'
import { LoginScreen } from '../screens'
import { navigate } from '../actions'

const mapDispatchToProps = {
  navigate,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(LoginScreen)
