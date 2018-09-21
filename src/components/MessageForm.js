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
  title: 'Отправить',
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

const FormArea = FormInput.extend.attrs({
  multiline: true,
  maxLength: 1000,
  inputStyle: ({ theme }) => ({
    color: theme.color.black100,
    height: 200,
  }),
})``

const TitleText = styled(Text).attrs({
  h4: true,
})`
  color: ${({ theme }) => theme.color.black100};
  text-align: center;
  margin-bottom: 20px;
`

type Props = {
  theme: object,
  titleText: string,
  sendMessage: Function,
} & FormProps

class MessageForm extends React.PureComponent<Props> {
  render() {
    const {
      theme,
      titleText,
      submitting,
      sendMessage,
      handleSubmit,
    } = this.props
    return (
      <Container>
        <TitleText>{titleText}</TitleText>
        <Field name="topic" theme={theme} component={this._renderTopicInput} />
        <Field name="area" theme={theme} component={this._renderAreaInput} />
        <SubmitButton
          loading={submitting}
          onPress={handleSubmit(sendMessage)}
        />
      </Container>
    )
  }

  _renderTopicInput = ({
    input: { value, onChange, onBlur },
    meta: { error, touched },
  }) => (
    <FormInput
      value={value}
      onBlur={onBlur}
      normalize={R.trim}
      onChangeText={onChange}
      placeholder="Тема сообщения"
      errorMessage={touched && error}
      onSubmitEditing={this.area && this.area.focus}
    />
  )

  _renderAreaInput = ({
    input: { value, onChange, onBlur },
    meta: { error, touched },
  }) => (
    <FormArea
      value={value}
      onBlur={onBlur}
      maxLength={1000}
      normalize={R.trim}
      onChangeText={onChange}
      placeholder="Текст сообщения"
      errorMessage={touched && error}
      withRef={ref => (this.area = ref)}
      onSubmitEditing={this.props.handleSubmit(this.props.sendMessage)}
    />
  )
}

export default MessageForm
