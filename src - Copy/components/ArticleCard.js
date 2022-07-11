import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Button from "./form/Button2";
import { APP } from "../helpers/data";
import { useFonts, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
const ArticleCard = ({
  img,
  name = "Articles",
  category = 'Clothes',
  colors = [APP.secondary, APP.colorGreen, APP.colorRed],
  price = 0,
  nav,
}) => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  return (
  <View style={styles.articleCard}>
    <View>
      <Image source={img} resizeMode="cover" style={{ width: "100%", height: 150, borderRadius: 20 }} />
    </View>
    <View style={{ padding: 10 }}>
      <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 20 }}>{name}</Text>
      <Text style={{ fontFamily: 'Poppins_400Regular', fontSize: 14, color: "#aaa" }}>{category}</Text>
    </View>
    <View style={{ flex: 1, flexDirection: "row", paddingHorizontal: 20, marginBottom: 20 }}>
      {colors.map((color, k) => (
        <View
          style={{
            width: 15,
            height: 15,
            backgroundColor: color,
            borderRadius: 20,
            marginRight: 10,
          }}
          key={k}
        ></View>
      ))}
    </View>
    <View style={{paddingHorizontal: 10, marginBottom: 10 }}>
      <Button
        onPress={() => {
          nav("productsMoreNavigation");
        }}
        label={`$ ${price}`}
      />
    </View>
  </View>
);
}

export default ArticleCard;

const styles = StyleSheet.create({
  articleCard: {
    width: 175,
    height: 335,
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
});
