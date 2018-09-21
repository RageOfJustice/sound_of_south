import { connect } from 'react-redux'
import { LogoutButton } from '../components'
import { logout } from '../actions'

const mapDispatchToProps = {
  logout,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(LogoutButton)
