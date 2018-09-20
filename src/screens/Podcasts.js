// @flow
import React from 'react'
import { FlatList } from 'react-native'
import {
  PlayerContainer as Player,
  TrackItemContainer as TrackItem,
} from '../containers'
import { Preloader } from '../components'
import styled from 'styled-components'

const RefreshControl = styled.RefreshControl.attrs({
  colors: ({ theme }) => [theme.color.orange],
  tintColor: ({ theme }) => theme.color.orange,
})``

type Props = {
  podcasts: object[],
  isFetching: boolean,
  isRefreshing: boolean,
  requestPodcasts: () => void,
  refreshPodcasts: () => void,
}

class Podcasts extends React.Component<Props> {
  _keyExtractor = (_, index) => `${index}`

  _renderItem = ({ item }) => <TrackItem {...item} />

  componentDidMount() {
    this.props.requestPodcasts()
  }

  render() {
    const { podcasts, isFetching, isRefreshing, refreshPodcasts } = this.props
    return (
      <React.Fragment>
        {!podcasts.length && isFetching ? (
          <Preloader renderContainer />
        ) : (
          !!podcasts.length && (
            <FlatList
              data={podcasts}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={refreshPodcasts}
                />
              }
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />
          )
        )}

        <Player />
      </React.Fragment>
    )
  }
}

export default Podcasts
