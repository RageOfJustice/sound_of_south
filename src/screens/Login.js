// @flow
import React from 'react'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { Input } from '../components'

const Container = styled.ScrollView`
  flex: 1;
`

type Props = {}
class Login extends React.Component<Props> {
  render() {
    return <Container />
  }
}

export default Login
