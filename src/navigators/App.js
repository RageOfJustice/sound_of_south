import React from 'react'
import { createSwitchNavigator } from 'react-navigation'

const AppNavigator = createSwitchNavigator({
  Login: null,
  Main: null,
})

class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

export default App
