// @flow
import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Divider, Text, Badge } from 'react-native-elements'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 30px;
  background-color: #fff;
  border-bottom-color: ${({ theme, selected }) =>
    selected ? theme.color.purple : theme.color.grey};
  border-bottom-width: ${({ selected }) => (selected ? 3 : 1)}px;
`

const LeftBlock = styled.View`
  flex: 1;
`

const RightBlock = styled.View`
  padding-left: 20px;
`

const Title = styled(Text)`
  font-size: ${({ theme }) => theme.size.l}
  color: ${({ theme }) => theme.color.orange};
`

const Tags = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-horizontal: -5px;
`

const Tag = styled(Badge).attrs({
  wrapperStyle: { paddingHorizontal: 5 },
  containerStyle: ({ theme }) => ({
    backgroundColor: theme.color.coolGray,
  }),
  textStyle: ({ theme }) => ({ color: theme.color.black100 }),
})``

const PlayIcon = styled(Icon).attrs({
  size: 50,
  raise: true,
  reverse: true,
  color: ({ theme }) => theme.color.orange,
})``

type Props = {
  title: string,
  trackId: string,
  playingTrackId: ?string,
  tags?: string[],
  isPlaying: boolean,
  theme: any,
  playTrack: Function,
  pauseTrack: Function,
}
class TrackItem extends React.Component<Props> {
  _togglePlay = () => {
    const { isPlaying, trackId, playTrack, pauseTrack } = this.props
    if (isPlaying) {
      pauseTrack()
    } else {
      playTrack(trackId)
    }
  }

  render() {
    const {
      tags,
      theme,
      title,
      trackId,
      isPlaying,
      playingTrackId,
    } = this.props
    return (
      <Container selected={playingTrackId === trackId}>
        <LeftBlock>
          <Title>{title}</Title>
          {!!tags && (
            <React.Fragment>
              <Divider
                style={{ marginVertical: 5, backgroundColor: theme.color.grey }}
              />
              <Tags>
                {tags.map((tag, index) => (
                  <Tag value={tag} key={index} />
                ))}
              </Tags>
            </React.Fragment>
          )}
        </LeftBlock>
        <RightBlock>
          <PlayIcon
            name={
              isPlaying
                ? playingTrackId === trackId && 'pause-circle'
                : 'play-circle'
            }
            onPress={this._togglePlay}
          />
        </RightBlock>
      </Container>
    )
  }
}

export default TrackItem
