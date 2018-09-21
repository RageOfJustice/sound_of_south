// @flow
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

type Props = {
  logout: () => void,
}

class LogoutButton extends React.PureComponent<Props> {
  _handlePress = () => this.props.logout()

  render() {
    return (
      <Icon
        name="sign-out"
        color="#fff"
        size={30}
        onPress={this._handlePress}
      />
    )
  }
}

export default LogoutButton
