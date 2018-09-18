// @flow
import { NavigationActions } from 'react-navigation'

const config = {}

export const setNavigator = (nav: object): void => {
  if (nav) {
    config.navigator = nav
  }
}

export const navigate = (routeName: string, params?: object): void => {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params })
    config.navigator.dispatch(action)
  }
}

export const goBack = (key: string | null | void): void => {
  if (config.navigator) {
    let options = {}
    if (key !== undefined) {
      options.key = key
    }
    const action = NavigationActions.back(options)
    config.navigator.dispatch(action)
  }
}
