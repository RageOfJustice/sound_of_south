// @flow
import React from 'react'
import R from 'ramda'
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
  labelStyle: ({ theme }) => ({
    color: theme.color.orange,
    fontSize: theme.size.m,
  }),
  containerStyle: {
    backgroundColor: 'transparent',
    marginBottom: 20,
    width: null,
  },
  inputContainerStyle: ({ theme }) => ({
    borderBottomColor: theme.color.orange,
  }),
  errorStyle: ({ theme }) => ({ color: theme.color.red }),
})``

const LogoText = styled(Text)`
  font-size: 30px;
  color: ${({ theme }) => theme.color.black100};
  text-align: center;
  margin-bottom: 20px;
`

type Props = {
  theme: object,
  logoText: string,
  requestAuth: Function,
} & FormProps

class LoginForm extends React.PureComponent<Props> {
  render() {
    const {
      theme,
      logoText,
      handleSubmit,
      requestAuth,
      submitting,
    } = this.props
    return (
      <Container>
        <LogoText>{logoText}</LogoText>
        <Field
          name="username"
          theme={theme}
          component={this._renderLoginInput}
        />
        <Field
          name="password"
          theme={theme}
          component={this._renderPasswordInput}
        />
        <SubmitButton
          loading={submitting}
          onPress={handleSubmit(requestAuth)}
        />
      </Container>
    )
  }

  _renderLoginInput = ({
    input: { value, onChange, onBlur },
    meta: { error, touched },
  }) => (
    <FormInput
      label="Имя Пользователя"
      onChangeText={onChange}
      onBlur={onBlur}
      textContentType="username"
      placeholder="ivan.ivanov"
      value={value}
      normalize={R.trim}
      errorMessage={touched && error}
      onSubmitEditing={() => this.password.focus()}
    />
  )

  _renderPasswordInput = ({
    input: { value, onChange, onBlur },
    meta: { error, touched },
  }) => (
    <FormInput
      label="Пароль"
      onChangeText={onChange}
      onBlur={onBlur}
      secureTextEntry
      selectTextOnFocus
      textContentType="password"
      placeholder="коррп. пароль"
      value={value}
      innerRef={ref => (this.password = ref)}
      onSubmitEditing={this.props.handleSubmit(this.props.requestAuth)}
      errorMessage={touched && error}
    />
  )
}

export default LoginForm
