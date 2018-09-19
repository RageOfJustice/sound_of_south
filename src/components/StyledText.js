// @flow
import { Platform } from 'react-native'
import styled from 'styled-components'

const StyledText = styled.Text`
    ${Platform.OS === 'android' ? 'fontFamily: Roboto;' : ''}
    color: ${({ theme, color }) => color || theme.color.black100};
    font-size: ${({ theme, size }) => size || theme.size.s}px;
      font-weight: ${({ theme, weight }) => weight || theme.weight.regular};
`

export default StyledText
