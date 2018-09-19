// @flow
import React from 'react'
import styled from 'styled-components'
import type { navigationParams } from '../utils'
import { LoginFormContainer as LoginForm } from '../containers'

const Container = styled.View`
  flex: 1;
  justify-content: center;
`

type Props = {
  navigate: (routeName: navigationParams) => void,
}
class Login extends React.Component<Props> {
  render() {
    return (
      <Container>
        <LoginForm />
      </Container>
    )
  }
}

export default Login
