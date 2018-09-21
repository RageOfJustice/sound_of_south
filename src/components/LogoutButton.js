// @flow
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styled from 'styled-components'
import { HIT_SLOP_10 } from '../constants'

const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: HIT_SLOP_10,
})`
  margin-horizontal: 10px;
`

type Props = {
  logout: () => void,
}

class LogoutButton extends React.PureComponent<Props> {
  _handlePress = () => this.props.logout()

  render() {
    return (
      <Touchable onPress={this._handlePress}>
        <Icon color="#ff4f11" name="ios-log-out" size={25} />
      </Touchable>
    )
  }
}

export default LogoutButton
