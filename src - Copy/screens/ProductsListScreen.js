import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import { APP } from "../helpers/data";
import ProductFlatList from "../components/ProductFlatList";

export default function ProductsListScreen(props) {
  const [loading, setloading] = useState(true);
  const [products, setProducts] = useState([
    {
      cover: require("../assets/images/item4.jpg"),
      category: "Electro",
      name: "SmartPhones",
      price: Math.round(Math.random() * 50),
    },
    {
      cover: require("../assets/images/item5.jpeg"),
      category: "Baskets",
      name: "Baskets",
      price: Math.round(Math.random() * 50),
    },
    {
      cover: require("../assets/images/shoes.jpg"),
      category: "Electro",
      name: "Nike retro 3",
      price: Math.round(Math.random() * 50),
    },
    {
      cover: require("../assets/images/item6.jpg"),
      category: "Electro",
      name: "Sound",
      price: Math.round(Math.random() * 50),
    },
  ]);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ height: "100%", backgroundColor: '#eef4f7' }}>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.container}>
            <ActivityIndicator size={"large"} color={APP.primary} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{ height: "100%" }}>
        <ScrollView style={{ height: "100%" }}>
          <View>
            <ProductFlatList nav={props.navigation.navigate} list={products} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
