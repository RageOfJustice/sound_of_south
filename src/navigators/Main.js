import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { PodcastsContainer, HeaderContainer as Header } from '../containers'
import Icon from 'react-native-vector-icons/FontAwesome'

const Main = createStackNavigator(
  {
    Podcasts: {
      screen: PodcastsContainer,
      navigationOptions: {
        header: (
          <Header
            title="Голос Юга"
            rightComponent={<Icon name="envelope" color="#fff" size={30} />}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Podcasts',
  },
)

export default Main
