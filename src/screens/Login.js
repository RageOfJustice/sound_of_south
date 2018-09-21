// @flow
import React from 'react'
import styled from 'styled-components'
import type { navigationParams } from '../utils'
import { LoginFormContainer as LoginForm } from '../containers'
import {Text} from 'react-native-elements'


const DescriptionText = styled(Text)`
  color: ${({theme}) => theme.color.black100};
  font-size: ${({theme}) => theme.size.m};
  text-align: center;
`

const OrangeText = DescriptionText.extend`
  color:  ${({theme}) => theme.color.orange};
`

const DescriptionWrapper = styled.View`
  padding-vertical: 20px;
`

const Container = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.coolGray};
`

type Props = {
  navigate: (routeName: navigationParams) => void,
}
class Login extends React.Component<Props> {
  render() {
    return (
      <Container>
        <LoginForm logoText="Голос Юга" />
        <DescriptionWrapper>
        <DescriptionText>
          Для входа введите свои данные в формате:
        </DescriptionText>
        <OrangeText>
          ivan.ivanov
        </OrangeText>
        <OrangeText>
          пароль в корп. системе
        </OrangeText>
        </DescriptionWrapper>
      </Container>
    )
  }
}

export default Login
