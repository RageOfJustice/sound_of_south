// @flow
import React from 'react'
import Video from 'react-native-video'
import R from 'ramda'
// import MusicControl from 'react-native-music-control'

type Props = {
  isPaused: boolean,
  trackUrl: string,
}
class Player extends React.PureComponent<Props> {
  duration = 0
  lastUpdated = 0

  render() {
    const {
      trackUrl = 'https://s55myt.storage.yandex.net/get-mp3/01e98ae33d426d2f350422296b9e9d71/0005764e0aee959b/music/25/7/data-0.2:21788133749:8684981?track-id=303979&play=false',
      isPaused,
    } = this.props
    return (
      !R.isEmpty(trackUrl) && (
        <Video
          style={{ position: 'absolute', opacity: 0 }}
          source={{
            uri: trackUrl,
          }}
          ref={ref => {
            this.player = ref
          }}
          volume={1.0}
          muted={false}
          rate={1}
          paused={isPaused}
          //   onEnd={this._onEnd}
          //   onLoad={this._onLoad}
          //   onSeek={this._onSeek}
          playInBackground={true}
          playWhenInactive={true}
          //   onBuffer={this._onBuffer}
          ignoreSilentSwitch={'ignore'}
          //   onProgress={this._onProgress}
          //   onLoadStart={this._onLoadStart}
        />
      )
    )
  }

  //   _onBuffer = ({ isBuffering }) => {
  //     const { isPaused } = this.props
  //     if (isBuffering) {
  //       MusicControl.updatePlayback({
  //         state: MusicControl.STATE_BUFFERING,
  //       })
  //     } else if (isPaused) {
  //       MusicControl.updatePlayback({
  //         state: MusicControl.STATE_PAUSED,
  //         elapsedTime: this.currentTime || 0,
  //       })
  //     } else {
  //       MusicControl.updatePlayback({
  //         state: MusicControl.STATE_PLAYING,
  //         elapsedTime: this.currentTime,
  //       })
  //     }
  //   }

  //   _onEnd = () => {
  //     const { setCurrentTime, changeTrack, trackId } = this.props
  //     setCurrentTime({ playPosition: this.duration, trackId })
  //     changeTrack(true)
  //   }

  //   _onLoad = ({ duration, currentTime }) => {
  //     const { trackId, fetchTrack, setDuration, setCurrentTime } = this.props
  //     fetchTrack(true)
  //     this.duration = duration || 0
  //     setDuration({ duration: duration || 0, trackId })
  //     this.updateCurrentTime &&
  //       setCurrentTime({ playPosition: currentTime || 0, trackId })
  //   }

  //   _onProgress = ({ currentTime }) => {
  //     this.currentTime = currentTime
  //     const { trackId } = this.props
  //     const now = Date.now()
  //     if (now - this.lastUpdated >= 900) {
  //       setCurrentTime({ playPosition: currentTime || 0, trackId })
  //       this.lastUpdated = now
  //     }
  //   }

  //   _onLoadStart = () => {
  //     this.currentTime = 0
  //   }

  //   _setupMusicControls = () => {
  //     MusicControl.enableBackgroundMode(true)
  //     // Basic Controls
  //     MusicControl.enableControl('play', true)
  //     MusicControl.enableControl('pause', true)
  //     MusicControl.enableControl('nextTrack', true)
  //     MusicControl.enableControl('previousTrack', true)

  //     MusicControl.enableControl('closeNotification', true, { when: 'paused' })

  //     MusicControl.on('pause', () => {
  //       this.props.requestPauseTrack(true)
  //     })
  //     MusicControl.on('play', () => {
  //       this.props.requestContinueTrack()
  //     })
  //     MusicControl.on('nextTrack', () => {
  //       this.props.changeTrack(true)
  //     })
  //     MusicControl.on('previousTrack', () => {
  //       this.props.changeTrack(false)
  //     })
  //   }

  //   componentDidMount() {
  //     this._setupMusicControls()
  //   }

  //   componentWillUnmount() {
  //     MusicControl.stopControl()
  //   }
}

export default Player
