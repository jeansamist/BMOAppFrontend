import { SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "../components/CategoryCard";
export default function ProductsCategoriesScreen(props) {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: '#eef4f7' }}>
      <ScrollView style={{ height: "100%" }}>
        <CategoryCard
          img={
            <Image
              source={require("./../assets/images/item392x252.png")}
              resizeMode="contain"
              style={{ width: 100, height: 100 }}
            />
          }
          nav={props.navigation.navigate}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
