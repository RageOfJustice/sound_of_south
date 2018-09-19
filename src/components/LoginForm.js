// @flow
import React from 'react'
import { Platform } from 'react-native'
import { Field } from 'redux-form'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Input, Button, Text, Divider } from 'react-native-elements'
import styled from 'styled-components'
import { HIT_SLOP_10 } from '../constants'

const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.select({ android: 'padding' }),
})`
  padding: 30px 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.coolGray};
`

const SubmitButton = styled(Button).attrs({
  title: 'Вход',
  activeOpacity: 0.6,
  hitSlop: HIT_SLOP_10,
  buttonStyle: ({ theme }) => ({
    backgroundColor: theme.color.orange,
  }),
})``

const FormInput = styled(Input).attrs({
  shake: true,
  selectTextOnFocus: true,
  containerStyle: {
    backgroundColor: '#fff',
    marginBottom: 20,
    width: null,
  },
})``

const LogoText = styled(Text)`
  font-size: ${({ theme }) => theme.size.l};
  color: ${({ theme }) => theme.color.black100};
  text-align: center;
`

type Props = {
  theme: object,
  logoText: string,
}

class LoginForm extends React.PureComponent<Props> {
  render() {
    const { theme, logoText } = this.props
    return (
      <Container>
        <LogoText>{logoText}</LogoText>
        <Divider
          style={{ backgroundColor: theme.color.black80, marginVertical: 10 }}
        />
        <Field name="login" theme={theme} component={this._renderLoginInput} />
        <Field
          name="password"
          theme={theme}
          component={this._renderPasswordInput}
        />
        <SubmitButton />
      </Container>
    )
  }

  _renderLoginInput = ({
    input: { value, onChange },
    meta: { error },
    theme,
  }) => (
    <FormInput
      leftIcon={<Icon name="user" size={30} color={theme.color.black100} />}
      onChangeText={onChange}
      textContentType="username"
      placeholder="Логин"
      value={value}
      errorMessage={error}
    />
  )

  _renderPasswordInput = ({
    input: { value, onChange },
    meta: { error },
    theme,
  }) => (
    <FormInput
      leftIcon={<Icon name="lock" size={30} color={theme.color.black100} />}
      onChangeText={onChange}
      secureTextEntry
      selectTextOnFocus
      textContentType="password"
      placeholder="Пароль"
      value={value}
      errorMessage={error}
    />
  )
}

export default LoginForm
