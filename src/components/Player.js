// @flow
import React from 'react'
import Video from 'react-native-video'

type Props = {
  isPaused: boolean,
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
        />
      )
    )
  }
}

export default Player
