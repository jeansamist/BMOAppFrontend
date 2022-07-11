import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
// import ArticleCard from "../components/ArticleCard";
import { APP } from "../helpers/data";
import ProductFlatList from "../components/ProductFlatList";
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

import Button from "../components/form/Button2";

export default function HomeScreen(props) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  const [loading, setloading] = useState(true);
  const [headArticle, setheadArticle] = useState({})
  const [bestsArticles, setbestsArticles] = useState([{}])
  useEffect(() => {
    setTimeout(() => {
      setbestsArticles([
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
      ])
      setheadArticle(
        {
          cover: require("../assets/images/LogoPng.png"),
        }
      )
      setloading(false);
    }, 1500);
  }, []);
  if (!loading) {
    
    return (
      <SafeAreaView style={{ height: "100%", backgroundColor: '#eef4f7' }}>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.headCard}>
            <Image
              source={headArticle.cover}
              resizeMode="contain"
              style={{ width: '100%', height: '100%', borderRadius: 10 }}
            />
          </View>
          <View>
            <Text style={{ fontFamily: 'Poppins_700Bold', fontSize: 30, marginTop: 10, textAlign: 'center' }}>Best Articles</Text>
            <ProductFlatList nav={props.navigation.navigate} list={bestsArticles} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <View>
      <Text>Loading....</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  headCard: {
    position: "relative",
    backgroundColor: "#fff",
    width: "95%",
    height: 300,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    padding: 20,
    shadowRadius: 20,
    margin: "2.5%",
    borderRadius: 10,
  },
  articleCard: {
    width: 175,
    height: 300,
    padding: 20,
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  cardlistContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  sectionTitle: {
    fontWeight: "bold",
  },
});
