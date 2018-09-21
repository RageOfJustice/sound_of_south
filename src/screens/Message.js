// @flow
import React from 'react'
import { MessageFormContainer as MessageForm } from '../containers'
import styled from 'styled-components'

const Container = styled.ScrollView``

type Props = {}

class Message extends React.Component<Props> {
  render() {
    return (
      <Container>
        <MessageForm titleText="Если у вас есть идеи, вопросы, предложения напишите нам" />
      </Container>
    )
  }
}

export default Message
