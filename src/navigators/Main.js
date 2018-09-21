import { createStackNavigator } from 'react-navigation'
import { PodcastsContainer } from '../containers'

const Main = createStackNavigator(
  {
    Podcasts: {
      screen: PodcastsContainer,
      navigationOptions: { title: 'Голос Юга' },
    },
  },
  {
    initialRouteName: 'Podcasts',
  },
)

export default Main
