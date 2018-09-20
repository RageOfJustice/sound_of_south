// @flow
import React from 'react'
import styled from 'styled-components'
import { TrackItemContainer as TrackItem } from '../containers'

const Container = styled.View`
  flex: 1;
`

const FlatList = styled.FlatList`
  flex: 1;
`

const tracks = [
  {
    title: 'Awaken',
    tags: ['#tag', '#tag1', '#tag2'],
  },
  {
    title: 'Murmaider',
  },
]

class Podcasts extends React.Component {
  _keyExtractor = (_, index) => `${index}`

  _renderItem = ({ item }) => <TrackItem {...item} />

  render() {
    return (
      <Container>
        <FlatList
          data={tracks}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </Container>
    )
  }
}

export default Podcasts
