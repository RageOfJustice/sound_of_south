import React from 'react'
import { Field } from 'redux-form'
import Input from './Input'
import StyledText from './StyledText'
import styled from 'styled-components'

const Container = styled.View`
  padding-horizontal: 20px;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`

const Text = StyledText.extend`
  margin-right: 10px;
`

class LoginForm extends React.PureComponent {
  render() {
    return (
      <Container>
        <Field name="login" component={this._renderLoginInput} />
        <Field name="password" component={this._renderPasswordInput} />
      </Container>
    )
  }

  _renderLoginInput = ({ input: { value, onChange } }) => {
    return (
      <Row>
        <Text>Login</Text>
        <Input
          onChangeText={onChange}
          selectTextOnFocus
          textContentType="username"
          value={value}
        />
      </Row>
    )
  }

  _renderPasswordInput = ({ input: { value, onChange } }) => {
    return (
      <Row>
        <Text>Password</Text>
        <Input
          onChangeText={onChange}
          secureTextEntry
          selectTextOnFocus
          textContentType="password"
          value={value}
        />
      </Row>
    )
  }
}

export default LoginForm
