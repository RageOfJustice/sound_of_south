// @flow
import React from 'react'
import { Platform } from 'react-native'
import { Field } from 'redux-form'
import type { FormProps } from 'redux-form'
import { Input, Button, Text } from 'react-native-elements'
import styled from 'styled-components'
import { HIT_SLOP_10 } from '../constants'

const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.select({ android: 'padding' }),
})`
  padding: 30px 20px;
`

const SubmitButton = styled(Button).attrs({
  title: 'Вход',
  activeOpacity: 0.6,
  hitSlop: HIT_SLOP_10,
  buttonStyle: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 25,
  },
  loadingProps: ({ theme }) => ({ size: 'small', color: theme.color.orange }),
  loadingStyle: {
    padding: 10,
  },
  titleStyle: ({ theme }) => ({
    color: theme.color.orange,
  }),
})``

const FormInput = styled(Input).attrs({
  shake: true,
  selectTextOnFocus: true,
  inputStyle: ({ theme }) => ({
    color: theme.color.black100,
  }),
  containerStyle: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    width: null,
  },
  inputContainerStyle: ({ theme }) => ({
    borderBottomColor: theme.color.orange,
  }),
})``

const LogoText = styled(Text)`
  font-size: 30px;
  color: ${({ theme }) => theme.color.black100};
  text-align: center;
  margin-bottom: 20px;
`

const FormLabel = styled(Text)`
  font-size: ${({ theme }) => theme.size.m};
  color: ${({ theme }) => theme.color.orange};
`

type Props = {
  theme: object,
  logoText: string,
  isFetching: boolean,
  requestAuth: Function,
} & FormProps

class LoginForm extends React.PureComponent<Props> {
  render() {
    const {
      theme,
      logoText,
      handleSubmit,
      requestAuth,
      isFetching,
    } = this.props
    return (
      <Container>
        <LogoText>{logoText}</LogoText>
        <Field name="login" theme={theme} component={this._renderLoginInput} />
        <Field
          name="password"
          theme={theme}
          component={this._renderPasswordInput}
        />
        <SubmitButton
          loading={isFetching}
          onPress={handleSubmit(requestAuth)}
        />
      </Container>
    )
  }

  _renderLoginInput = ({ input: { value, onChange }, meta: { error } }) => (
    <React.Fragment>
      <FormLabel>Имя Пользователя</FormLabel>
      <FormInput
        onChangeText={onChange}
        textContentType="username"
        placeholder="ivan.ivanov"
        value={value}
        errorMessage={error}
      />
    </React.Fragment>
  )

  _renderPasswordInput = ({ input: { value, onChange }, meta: { error } }) => (
    <React.Fragment>
      <FormLabel>Пароль</FormLabel>
      <FormInput
        onChangeText={onChange}
        secureTextEntry
        selectTextOnFocus
        textContentType="password"
        placeholder="коррп. пароль"
        value={value}
        errorMessage={error}
      />
    </React.Fragment>
  )
}

export default LoginForm
