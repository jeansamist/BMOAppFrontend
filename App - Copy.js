import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { APP } from "./src/helpers/data";
import CartScreen from "./src/screens/CartScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";
import Home from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ProductsScreen from "./src/screens/ProductsScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
const Tab = createBottomTabNavigator();
const Account = createNativeStackNavigator();

function Accounts() {
  return (
    <Account.Navigator>
      <Account.Screen
        name="loginNavigation"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Account.Screen
        name="registerNavigation"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Account.Screen
        name="fogotPasswordNavigation"
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
        }}
      />

      <Account.Screen
        name="auth"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Account.Navigator>
  );
}

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homeNavigation"
        component={Home}
        options={{
          title: "Home",
          headerLeft: null,
          headerStyle: {
            backgroundColor: APP.primary,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  flex: 1,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? APP.primary : "#fff",
                }}
              >
                <FontAwesomeIcon
                  size={20}
                  color={focused ? "#fff" : APP.primary}
                  name="home"
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="products"
        component={ProductsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  flex: 1,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? APP.primary : "#fff",
                }}
              >
                <FontAwesomeIcon
                  size={20}
                  color={focused ? "#fff" : APP.primary}
                  name="shopping-cart"
                />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="cartNavigation"
        component={CartScreen}
        options={{
          title: "Cart",
          headerLeft: null,
          headerStyle: {
            backgroundColor: APP.primary,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  flex: 1,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? APP.primary : "#fff",
                }}
              >
                <FontAwesomeIcon
                  size={20}
                  color={focused ? "#fff" : APP.primary}
                  name="dollar"
                />
              </View>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="You"
        component={UserScreen}
        options={{
          headerLeft: null,
          headerStyle: {
            backgroundColor: APP.primary,
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 40,
                height: 40,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  flex: 1,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: focused ? APP.primary : "#fff",
                }}
              >
                <FontAwesomeIcon
                  size={20}
                  color={focused ? "#fff" : APP.primary}
                  name="user"
                />
              </View>
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default function App() {
  const [auth, setauth] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setauth(true);
    }, 1000);
  }, []);

  if (auth === true) {
    return (
      <NavigationContainer>
        <Tabs />
        {/* <ProductsMoreScreen /> */}
        <StatusBar style="light" backgroundColor={APP.primary} />
      </NavigationContainer>
    );
  } else if (auth === false) {
    return (
      <NavigationContainer>
        <Accounts setAuth={setauth} />
        <StatusBar style="auto" backgroundColor={APP.secondary} />
      </NavigationContainer>
    );
  } else if (auth === null) {
    return (
      <NavigationContainer>
        <ActivityIndicator size={"large"} color={APP.primary} />
        <StatusBar style="auto" backgroundColor={APP.secondary} />
      </NavigationContainer>
    );
  }
}
