// @flow
import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { setNavigation, checkToken } from '../actions'
import { LoginContainer } from '../containers'
import MainNavigator from './Main'

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: LoginContainer,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Login',
  },
)

type Props = {
  checkToken: Function,
  setNavigation: (nav: object) => void,
}
class App extends React.Component<Props> {
  componentDidMount() {
    this.props.setNavigation(this.navigator)
    this.props.checkToken()
  }

  render() {
    return <AppSwitchNavigator ref={ref => (this.navigator = ref)} />
  }
}

const mapDispatchToProps = {
  checkToken,
  setNavigation,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(App)
