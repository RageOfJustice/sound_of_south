// @flow
import React from 'react'
import { Button } from 'react-native'
import styled from 'styled-components'
// import { Field } from 'redux-form'
// import { Input } from '../components'

const Container = styled.ScrollView.attrs({
  contentContainerStyle: { justifyContent: 'center' },
})`
  flex: 1;
`

type navigationParams = string | { routeName: string, params?: object }

type Props = {
  navigate: (routeName: navigationParams) => void,
}
class Login extends React.Component<Props> {
  render() {
    return (
      <Container>
        <Button
          title="Podcasts"
          onPress={() => this.props.navigate('Podcasts')}
        />
      </Container>
    )
  }
}

export default Login
