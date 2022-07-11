import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppNavigator from "./src/navigators/AppNavigator";
import StartupNavigator from "./src/navigators/StartupNavigator";
let {Navigator, Screen} = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="startup" component={StartupNavigator} options={{headerShown: false}}/>
        <Screen name="app" component={AppNavigator} options={{headerShown: false}}/>
      </Navigator>
    </NavigationContainer>
  )
}