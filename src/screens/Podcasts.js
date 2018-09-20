// @flow
import React from 'react'
import { FlatList } from 'react-native'
import {
  PlayerContainer as Player,
  TrackItemContainer as TrackItem,
} from '../containers'
import { Preloader } from '../components'

type Props = {
  podcasts: object[],
  isFetching: boolean,
  requestPodcasts: Function,
}

class Podcasts extends React.Component<Props> {
  _keyExtractor = (_, index) => `${index}`

  _renderItem = ({ item }) => <TrackItem {...item} />

  componentDidMount() {
    this.props.requestPodcasts()
  }

  render() {
    const { podcasts, isFetching } = this.props
    return (
      <React.Fragment>
        {podcasts.length && !isFetching ? (
          <FlatList
            data={podcasts}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        ) : (
          <Preloader renderContainer />
        )}

        <Player />
      </React.Fragment>
    )
  }
}

export default Podcasts
