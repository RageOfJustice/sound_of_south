// @flow
import React from 'react'
import { FlatList, View } from 'react-native'
import {
  PlayerContainer as Player,
  TrackItemContainer as TrackItem,
} from '../containers'

const tracks = [
  {
    title: 'Murmaider',
    tags: ['#tag', '#tag1', '#tag2'],
    url:
      'https://cs1-48v4.vkuseraudio.net/p8/39e4d1cc83bafc.mp3?extra=V2h8wVgWKReYcPLR3gIUjxdGflD5MMnP3hHjOSJi-s18VmYIPXc__0gRVwwF-vdXTZEUfmYmSJFvS2jDr4NaiUc6UnMWYCHnr56NMqhLsIMg5MHDZqO4j_gG09-SOTpZUqiJp7i4yiwlbTs',
  },
  {
    title: '2 minutes',
    url:
      'https://s55myt.storage.yandex.net/get-mp3/01e98ae33d426d2f350422296b9e9d71/0005764e0aee959b/music/25/7/data-0.2:21788133749:8684981?track-id=303979&play=false',
    tags: ['#bestbands', '#iron'],
  },
]

class Podcasts extends React.Component {
  _keyExtractor = (_, index) => `${index}`

  _renderItem = ({ item }) => <TrackItem {...item} />

  render() {
    return (
      <React.Fragment>
        <FlatList
          data={tracks}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />

        <Player />
      </React.Fragment>
    )
  }
}

export default Podcasts
