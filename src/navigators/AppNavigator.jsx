import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasketScreen from '../screens/BasketScreen';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import UserScreen from '../screens/UserScreen';
import CommandsScreen from '../screens/CommandsScreen'

let {Navigator, Screen} = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Navigator>
      <Screen name='homeScreen' component={HomeScreen} options={{headerShown: false}} />
      <Screen name='productScreen' component={ProductScreen} options={{headerShown: false}} />
      <Screen name='basketScreen' component={BasketScreen} options={{headerShown: false}} />
      <Screen name='userScreen' component={UserScreen} options={{headerShown: false}} />
      <Screen name='commandsScreen' component={CommandsScreen} options={{headerShown: false}} />
    </Navigator>
  )
}