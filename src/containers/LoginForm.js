import { reduxForm } from 'redux-form'
import { LoginForm } from '../components'

export default reduxForm({
  form: 'auth',
})(LoginForm)
