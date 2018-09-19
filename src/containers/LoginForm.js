import R from 'ramda'
import { reduxForm } from 'redux-form'
import { LoginForm } from '../components'
import { withTheme } from 'styled-components'

export default R.compose(
  reduxForm({
    form: 'auth',
  }),
  withTheme,
)(LoginForm)
