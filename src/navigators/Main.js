import { createStackNavigator } from 'react-navigation'
import { PodcastsScreen } from '../screens'

const Main = createStackNavigator(
  {
    Podcasts: {
      screen: PodcastsScreen,
      navigationOptions: { title: 'Голос Юга' },
    },
  },
  {
    initialRouteName: 'Podcasts',
  },
)

export default Main
