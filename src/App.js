import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AppNavigator } from './navigators'
import theme from './theme'
import configureStore from './configureStore'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  </Provider>
)

export default App
