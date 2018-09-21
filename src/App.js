import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppNavigator } from './navigators'
import theme from './theme'
import configureStore from './configureStore'
import { YellowBox, StatusBar } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: Failed prop type: Invalid prop `errorMessage`',
])

const store = configureStore()

// store.subscribe(() => console.log(store.getState()))

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </React.Fragment>
    </ThemeProvider>
  </Provider>
)

export default App
