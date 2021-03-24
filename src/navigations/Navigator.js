import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { AppLoading } from 'expo'
import Landing from '../screens/Landing'
import Profile from '../screens/Profile'
import Address from '../screens/Address'
import Cart from '../screens/Cart'

const stackNavigatorOptions = {
    headerShown: false
}

const AppNavigator = createStackNavigator({
    Landing: { screen: Landing },
    Login: { screen: Login },
    Home: { screen: Home },
    Detail: { screen: Detail },
    Profile: { screen: Profile },
    Address: { screen: Address },
    Cart: { screen: Cart }
},
    {
        defaultNavigationOptions: stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);