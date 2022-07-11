import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmailVerifyScreen from '../screens/EmailVerifyScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

let {Navigator, Screen} = createNativeStackNavigator();

export default function StartupNavigator() {
  return (
    <Navigator>
      <Screen name='welcomeScreen' component={WelcomeScreen} options={{headerShown: false}} />
      <Screen name='registerScreen' component={RegisterScreen} options={{headerShown: false}} />
      <Screen name='loginScreen' component={LoginScreen} options={{headerShown: false}} />
      <Screen name='emailVerifyScreen' component={EmailVerifyScreen} options={{headerShown: false}}/>
    </Navigator>
  )
}