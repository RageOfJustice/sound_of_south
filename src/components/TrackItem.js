// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons'
import { Divider, Text } from 'react-native-elements'

const Container = styled.View``

const Row = styled.View`
  flex-diretion: row;
`

const Title = styled(Text)`
  color: ${({ theme }) => theme.color.orange};
`

const Tags = styled(Text)`
  color: ${({ theme }) => theme.color.black100};
`

type Props = {
  title: string,
  tags: string,
  isPlaying: boolean,
  theme: any,
}
class TrackItem extends React.Component<Props> {
  render() {
    const { title, tags, theme, isPlaying } = this.props
    return (
      <Container>
        <Row>
          <Container>
            <Title>{title}</Title>
            <Divider />
            <Tags>{tags}</Tags>
          </Container>
          {isPlaying ? (
            <Icon
              raised
              name="play-circle"
              type="font-awesome"
              color={theme.color.orange}
            />
          ) : (
            <Icon
              raised
              name="pause-circle"
              type="font-awesome"
              color={theme.color.orange}
            />
          )}
        </Row>
      </Container>
    )
  }
}

export default TrackItem
