// App
import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Config
import { APP } from "./../helpers/data";

//  Screens
import ProductsCategoriesScreen from "./ProductsCategoriesScreen";
import ProductsListScreen from "./ProductsListScreen";
import ProductsMoreScreen from "./ProductsMoreScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  let options = {
    title: "Products",
    headerStyle: {
      backgroundColor: APP.primary,
    },
    headerTitleAlign: "center",
    headerTintColor: "#fff",
  };
  return (
    <Navigator>
      <Screen
        name="ProductsCategoriesNavigation"
        component={ProductsCategoriesScreen}
        options={options}
      />
      <Screen
        name="productsListNavigation"
        component={ProductsListScreen}
        options={options}
      />
      <Screen
        name="productsMoreNavigation"
        component={ProductsMoreScreen}
        options={options}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
