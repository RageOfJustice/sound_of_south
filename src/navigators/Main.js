import React from 'react'
import { createStackNavigator } from 'react-navigation'
import {
  MessageContainer,
  PodcastsContainer,
  LogoutButtonContainer as LogoutButton,
} from '../containers'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import styled from 'styled-components'
import { HIT_SLOP_10 } from '../constants'
import theme from '../theme'

const Touchable = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: HIT_SLOP_10,
})`
  margin-horizontal: 10px;
`

const Main = createStackNavigator(
  {
    Podcasts: {
      screen: PodcastsContainer,
      navigationOptions: ({ navigation }) => ({
        headerLeft: <LogoutButton />,
        headerRight: (
          <Touchable onPress={() => navigation.navigate('Message')}>
            <Icon color={theme.color.orange} name="envelope" size={25} />
          </Touchable>
        ),
      }),
    },
    Message: MessageContainer,
  },
  {
    initialRouteName: 'Podcasts',
    cardStyle: {
      backgroundColor: '#fff',
    },
    navigationOptions: {
      headerBackTitle: null,
      title: 'Голос Юга',
      headerTintColor: theme.color.orange,
      headerTitleStyle: {
        color: theme.color.black100,
      },
    },
  },
)

export default Main
