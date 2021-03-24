import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Login from '../screens/Login'
import Home from '../screens/Home'
import Detail from '../screens/Detail'
import { AppLoading } from 'expo'
import Landing from '../screens/Landing'

const stackNavigatorOptions = {
    headerShown :false
}

const AppNavigator = createStackNavigator({
    Landing:{screen:Landing},
    Login:{screen:Login},
    Home:{screen:Home},
    Detail:{screen:Detail}
},
    {
        defaultNavigationOptions:stackNavigatorOptions
    }
)
export default createAppContainer(AppNavigator);