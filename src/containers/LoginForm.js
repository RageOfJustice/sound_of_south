import R from 'ramda'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { LoginForm } from '../components'
import { withTheme } from 'styled-components'
import { requestAuth } from '../actions'
import { FORMS } from '../constants'
import { validateLoginForm } from '../utils'

const mapDispatchToProps = {
  requestAuth,
}

export default R.compose(
  reduxForm({
    form: FORMS.AUTH,
    validate: validateLoginForm,
  }),
  withTheme,
  connect(
    undefined,
    mapDispatchToProps,
  ),
)(LoginForm)
