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
  border-bottom-color: ${({ theme }) => theme.color.grey};
  border-bottom-width: 1px;
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
  wrapperStyle: { padding: 5 },
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

const TagDivider = styled(Divider)`
  margin-vertical: 5px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.grey};
`

type Props = {
  title: string,
  podcastId: string,
  playingTrackId: ?string,
  tags?: string[],
  isPaused: boolean,
  playTrack: Function,
  pauseTrack: Function,
}
class TrackItem extends React.Component<Props> {
  _togglePlay = () => {
    const { isPaused, podcastId, playTrack, pauseTrack } = this.props
    if (isPaused) {
      playTrack(podcastId)
    } else {
      pauseTrack()
    }
  }

  render() {
    const { tags, title, podcastId, isPaused, playingTrackId } = this.props
    return (
      <Container>
        <LeftBlock>
          <Title>{title}</Title>
          {!!tags && (
            <React.Fragment>
              <TagDivider />
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
              isPaused
                ? 'play-circle'
                : playingTrackId === podcastId
                  ? 'pause-circle'
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
