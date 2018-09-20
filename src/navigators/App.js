// @flow
import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import { setNavigation } from '../actions'
import { LoginContainer } from '../containers'
import MainNavigator from './Main'

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: LoginContainer,
    Main: MainNavigator,
  },
  {
    // initialRouteName: 'Login',
    initialRouteName: 'Main',
  },
)

type Props = {
  setNavigation: (nav: object) => void,
}
class App extends React.Component<Props> {
  componentDidMount() {
    this.props.setNavigation(this.navigator)
  }

  render() {
    return <AppSwitchNavigator ref={ref => (this.navigator = ref)} />
  }
}

const mapDispatchToProps = {
  setNavigation,
}

export default connect(
  undefined,
  mapDispatchToProps,
)(App)
