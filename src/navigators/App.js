import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { LoginScreen } from '../screens'
import MainNavigator from './Main'

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainNavigator,
})

class App extends React.Component {
  render() {
    return <AppNavigator />
  }
}

export default App
