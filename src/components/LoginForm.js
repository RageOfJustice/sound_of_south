// @flow
import React from 'react'
import { Platform } from 'react-native'
import { Field } from 'redux-form'
import Input from './Input'
import StyledText from './StyledText'
import styled from 'styled-components'
import { HIT_SLOP_10 } from '../constants'

const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.select({ android: 'padding' }),
})`
  padding: 30px 20px;
  background-color: ${({ theme }) => theme.color.purple};
  box-shadow: 1px 1px 2px ${({ theme }) => theme.color.black60};
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`

const Text = StyledText.extend.attrs({
  color: StyledText.colors.COOL_GRAY,
  size: StyledText.sizes.M,
  weight: StyledText.weights.NORMAL,
})`
  margin-right: 5px;
  flex: 1;
`

const FormInput = Input.extend`
  flex: 2;
`

const ButtonWrapper = styled.TouchableOpacity.attrs({
  hitSlop: HIT_SLOP_10,
  activeOpacity: 0.6,
})`
  padding: 10px 30px;
  align-items: center;
  align-self: center;
  background-color: ${({ theme }) => theme.color.orange};
`

const ButtonText = StyledText.extend.attrs({
  color: StyledText.colors.COOL_GRAY,
})``

const Button = props => (
  <ButtonWrapper {...props}>
    <ButtonText>Вход</ButtonText>
  </ButtonWrapper>
)

class LoginForm extends React.PureComponent {
  render() {
    return (
      <Container>
        <Field name="login" component={this._renderLoginInput} />
        <Field name="password" component={this._renderPasswordInput} />
        <Button />
      </Container>
    )
  }

  _renderLoginInput = ({ input: { value, onChange } }) => {
    return (
      <Row>
        <Text>Login</Text>
        <FormInput
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
        <FormInput
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
