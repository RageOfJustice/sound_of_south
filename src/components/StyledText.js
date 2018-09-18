// @flow
import React from 'react'
import { Platform } from 'react-native'
import styled from 'styled-components'

const Text = styled.Text`
    ${Platform.OS === 'android' ? 'fontFamily: Roboto;' : ''}
    color: ${({ theme, color }) =>
      color ? color : theme.color[StyledText.colors.COOL_GRAY]};
    font-size: ${({ theme, size }) =>
      size ? size : theme.size[StyledText.sizes.S]}px;
      font-weight: ${({ theme, weight }) =>
        weight ? weight : theme.weight[StyledText.weights.REGULAR]};
`
type Props = {
  color?: string,
  size?: number,
  weight?: string,
}

class StyledText extends React.Component<Props> {
  static colors = {
    PURPLE: 'purple',
    ORANGE: 'orange',
    COOL_GRAY: 'coolGray',
    BLACK_100: 'black100',
    GREY: 'grey',
  }

  static sizes = {
    XS: 'xs',
    S: 's',
    M: 'm',
    L: 'l',
  }

  static weights = {
    MEDIUM: 'meduim',
    REGULAR: 'regular',
    LIGHT: 'light',
  }

  render() {
    return <Text {...this.props} />
  }
}

export default StyledText
