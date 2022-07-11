import { View, Text, Button } from "react-native";
import React from "react";

export default function UserScreen(props) {
  return (
    <View>
      <Text>ProductsCategoriesScreen</Text>
      <Button
        onPress={() => {
          props.navigation.push("homeNavigation");
        }}
        title="Navig"
      ></Button>
    </View>
  );
}
