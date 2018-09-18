import { createStackNavigator } from 'react-navigation'
import { PodcastsScreen } from '../screens'

const Main = createStackNavigator({
  Podcasts: PodcastsScreen,
})

export default Main
