// @flow
import React from 'react'
import Video from 'react-native-video'

type Props = {
  isPaused: boolean,
  isFetching: boolean,
  changeTrack: (nextTrack: boolean) => void,
  setFetchingTrack: (fetching: boolean) => void,
  currentTrack: {
    url: string,
    ...rest,
  },
}
class Player extends React.PureComponent<Props> {
  duration = 0
  lastUpdated = 0

  render() {
    const {
      currentTrack: { url },
      isPaused,
    } = this.props
    return (
      !!url && (
        <Video
          style={{ position: 'absolute', opacity: 0, zIndex: -1 }}
          source={{
            uri: url,
          }}
          ref={ref => {
            this.player = ref
          }}
          volume={1.0}
          audioOnly
          muted={false}
          rate={1}
          paused={isPaused}
          playInBackground={true}
          playWhenInactive={true}
          ignoreSilentSwitch={'ignore'}
          onBuffer={this._onBuffer}
          onLoadStart={this._onLoadStart}
          onProgress={this._onProgress}
          onEnd={this._onEnd}
        />
      )
    )
  }

  _onLoadStart = () => {
    this.props.setFetchingTrack(true)
    this.isFetching = true
  }

  _onBuffer = ({ isBuffering }) => {
    this.isFetching = isBuffering
    this.props.setFetchingTrack(isBuffering)
  }

  _onProgress = () => {
    if (this.isFetching) {
      this.isFetching = false
      this.props.setFetchingTrack(false)
    }
  }

  _onEnd = () => this.props.changeTrack(true)
}

export default Player
