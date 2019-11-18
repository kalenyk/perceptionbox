import { createAppContainer, createStackNavigator } from 'react-navigation'

import UsersScreen from 'App/Containers/Users/';
import UserProfile from 'App/Containers/UserProfile/';

const StackNavigator = createStackNavigator(
  {
    MainScreen: UsersScreen,
    UserProfileScreen: UserProfile,
  },
  {
    initialRouteName: 'MainScreen',
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
