import { View, Text, StyleSheet } from 'react-native'
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import React from 'react'
import ArticleCard from './ArticleCard'
export default function ProductFlatList({ list = [], nav }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {list.length === 0 ? <>
        <ArticleCard img={require("./../assets/images/shoes.jpg")} />
        <ArticleCard img={require("./../assets/images/shoes.jpg")} />
        <ArticleCard img={require("./../assets/images/shoes.jpg")} />
        </> : list.map((item, k) => (
          <ArticleCard key={k} name={item.name} price={item.price} img={item.cover} nav={nav} />
        ))}
      
      <View style={styles.articleCard}>
        <View style={{ textAlign: "center" }}>
          <Text><FontAwesomeIcon name="plus" size={50} color="#fff" /></Text>
          <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>See More...</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  articleCard: {
    justifyContent: "center",
    width: 175,
    height: 335,
    backgroundColor: "#aaa",
    shadowColor: "#333",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    borderRadius: 20,
    marginVertical: 20,
  },
});