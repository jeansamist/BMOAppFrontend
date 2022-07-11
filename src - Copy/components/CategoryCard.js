import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Button from "./form/Button2";
export default function CategoryCard({
  img,
  title = "Title",
  nav,
  descript = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus totam illo atque, quam aperiam excepturi voluptatum magnam",
}) {
  return (
    <View style={styles.headCard}>
      <View style={{ width: "40%" }}>{img}</View>
      <View style={{ width: "60%" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>
          {title}
        </Text>
        <Text style={{ marginBottom: 20 }}>{descript}</Text>
        <Button
          onPress={() => {
            nav("productsListNavigation");
          }}
          label="View category"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headCard: {
    position: "relative",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "95%",
    height: 250,
    padding: 20,
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    marginHorizontal: "2.5%",
    borderRadius: 30,
    marginVertical: 20,
  },
});
