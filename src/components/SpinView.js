// @flow
import React from 'react'
import { Animated, Easing } from 'react-native'

type Props = {
  children: React.ReactNode[],
}

type State = {
  spinValue: typeof Animated.Value,
}
class SpinView extends React.PureComponent<Props, State> {
  state = { spinValue: new Animated.Value(0) }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
  }

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {
              rotate: this.state.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}

export default SpinView
