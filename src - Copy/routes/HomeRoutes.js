import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const screens = {
  Home: {
    screen: LoginScreen,
  },
  Register: {
    screen: RegisterScreen,
  },
};

const HomeRoutes = createNativeStackNavigator(screens);
export default HomeRoutes;
