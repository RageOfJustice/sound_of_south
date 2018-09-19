// @flow
import { Platform } from 'react-native'
import styled from 'styled-components'

const StyledText = styled.Text`
    ${Platform.OS === 'android' ? 'fontFamily: Roboto;' : ''}
    color: ${({ theme, color }) =>
      color ? theme.color[color] : theme.color[StyledText.colors.BLACK_100]};
    font-size: ${({ theme, size }) =>
      size ? theme.size[size] : theme.size[StyledText.sizes.S]}px;
      font-weight: ${({ theme, weight }) =>
        weight
          ? theme.weight[weight]
          : theme.weight[StyledText.weights.REGULAR]};
`

StyledText.colors = {
  PURPLE: 'purple',
  ORANGE: 'orange',
  COOL_GRAY: 'coolGray',
  BLACK_100: 'black100',
  GREY: 'grey',
}

StyledText.sizes = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
}

StyledText.weights = {
  MEDIUM: 'meduim',
  REGULAR: 'regular',
  LIGHT: 'light',
}

export default StyledText
