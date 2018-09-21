// @flow
import React from 'react'
import { Header as ElementsHeader } from 'react-native-elements'

type Props = {
  theme: any,
  title: string,
  leftComponent?: React.ReactNode,
  rightComponent?: React.ReactNode,
}

class Header extends React.PureComponent<Props> {
  render() {
    const { title, theme, leftComponent, rightComponent } = this.props
    return (
      <ElementsHeader
        placement="center"
        backgroundColor={theme.color.purple}
        centerComponent={{
          text: title,
          style: { color: '#fff', fontSize: 18, fontWeight: '700' },
        }}
        leftComponent={leftComponent}
        rightComponent={rightComponent}
      />
    )
  }
}

export default Header
