// @flow
import React from 'react'
import styled from 'styled-components'
import type { navigationParams } from '../utils'
import { LoginFormContainer as LoginForm } from '../containers'

const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.black100};
`

type Props = {
  navigate: (routeName: navigationParams) => void,
}
class Login extends React.Component<Props> {
  render() {
    return (
      <Container>
        <LoginForm logoText="Голос Юга" />
      </Container>
    )
  }
}

export default Login
