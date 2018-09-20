import R from 'ramda'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { LoginForm } from '../components'
import { withTheme } from 'styled-components'
import { requestAuth } from '../actions'
import { getIsAuthFetching } from '../selectors'

const mapStateToProps = R.applySpec({
  isFetching: getIsAuthFetching,
})

const mapDispatchToProps = {
  requestAuth,
}

export default R.compose(
  reduxForm({
    form: 'auth',
  }),
  withTheme,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginForm)
