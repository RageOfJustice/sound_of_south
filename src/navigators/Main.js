import React from 'react'
import { createStackNavigator } from 'react-navigation'
import {
  MessageContainer,
  PodcastsContainer,
  HeaderContainer as Header,
  LogoutButtonContainer as LogoutButton,
} from '../containers'
import Icon from 'react-native-vector-icons/FontAwesome'

const Main = createStackNavigator(
  {
    Podcasts: {
      screen: PodcastsContainer,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
            title="Голос Юга"
            leftComponent={<LogoutButton />}
            rightComponent={
              <Icon
                name="envelope"
                color="#fff"
                size={30}
                onPress={() => navigation.navigate('Message')}
              />
            }
          />
        ),
      }),
    },
    Message: {
      screen: MessageContainer,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header
            title="Голос Юга"
            leftComponent={
              <Icon
                name="arrow-left"
                color="#fff"
                size={30}
                onPress={() => navigation.goBack()}
              />
            }
          />
        ),
      }),
    },
  },
  {
    // initialRouteName: 'Podcasts',
    initialRouteName: 'Message',
  },
)

export default Main
