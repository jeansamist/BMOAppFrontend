import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Button from "../components/form/Button2";
import { APP } from "../helpers/data";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect } from "react";
import Field from "../components/form/Field";
import ProductFlatList from "../components/ProductFlatList";

export default function ProductsMoreScreen(props) {
  const colors = ['#190f32', APP.colorGreen, APP.colorRed, "#154070"];
  const [qte, setqte] = useState(1);
  useEffect(() => {
    // fetch(APP.server);
  }, []);

  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: '#eef4f7' }}>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.header}>
          <Image
            source={require("./../assets/images/shoes.jpg")}
            style={styles.item}
            resizeMode="cover"
          />
        </View>
        <View style={{ marginTop: 20, width: "90%", marginHorizontal: "5%", }}>
          <View>

            <View style={styles.itemData1}>
              <View style={{flex: 0.75}}>
                <Text style={{ fontWeight: "bold", fontSize: 35, }}>
                  Nike retro 3
                </Text>
                <Text style={{ fontSize: 20 }}>
                  $15.5 
                </Text>
                {/* <View style={{ flexDirection: "row", alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: APP.primary, fontWeight: "bold" }}>
                    $8
                  </Text>
                  <Text style={{ fontSize: 15, marginLeft: 10 }}>
                    -30%
                  </Text>
                </View> */}
              </View>
              <View style={{ flex: 0.25, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{color: APP.primary}}>
                  <FontAwesomeIcon size={30} name='star' />
                </Text>
                <Text style={{ marginLeft: 20, fontSize: 25, marginTop: -3, fontWeight: "bold" }}>50</Text>
              </View>
            </View>

            <View style={{ marginTop: 20, }}>
              <Text style={{ textAlign: "justify" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                id quidem delectus, praesentium, quia commodi velit iure
                necessitatibus nostrum sapiente numquam vel. Nam architecto
                nesciunt dignissimos labore esse, quisquam in?
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 20 }} >
            <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 10 }} >
              Colors
            </Text>
            <View style={{ flex: 1, flexDirection: "row" }}>
              {
                colors.map((color, k) => (
                  <View style={{ width: 25, height: 25, backgroundColor: color, borderRadius: 20, marginRight: 10,}} key={k}></View>
                ))
              }
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ marginBottom: 10, fontSize: 25, fontWeight: "bold" }}>
              Quantity
            </Text>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 200, marginRight: 20}}>
                <Field defaultValue={1} type="number" onChangeText={setqte} icoName='shopping-cart' label="" />
              </View>
              <View>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>$ {qte * 15.5}</Text>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Button
              onPress={() => {
                props.navigation.navigate("productsListNavigation");
              }}
              label={"Add to cart"}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 20 }}>In this category</Text>
            <View>
              <ProductFlatList nav={props.navigation.navigate} />
            </View>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "95%",
    height: 450,
    margin: "2.5%",
    borderRadius: 10,
    backgroundColor: APP.primary,
  },
  item: {
    width: "100%",
    height: 450,
    borderRadius: 10,
  },
  itemData1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
