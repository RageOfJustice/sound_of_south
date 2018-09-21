import R from 'ramda'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { MessageForm } from '../components'
import { withTheme } from 'styled-components'
import { sendMessage, navigate } from '../actions'
import { FORMS } from '../constants'
import { validateMessageForm } from '../utils'

const mapDispatchToProps = {
  navigate,
  sendMessage,
}

export default R.compose(
  reduxForm({
    form: FORMS.MESSAGE,
    validate: validateMessageForm,
  }),
  withTheme,
  connect(
    undefined,
    mapDispatchToProps,
  ),
)(MessageForm)
