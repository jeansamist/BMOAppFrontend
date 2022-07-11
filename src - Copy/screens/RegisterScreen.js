import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { APP } from "../helpers/data";
import Field from "../components/form/Field";
import Button from "./../components/form/Button";
export default function RegisterScreen(props) {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.container}>
        <LinearGradient
          // Button Linear Gradient
          colors={["#fff", APP.secondary]}
          style={{ height: "100%" }}
        >
          <ScrollView>
            <View style={styles.logoHead}>
              <Image
                source={require("./../assets/images/logo250x75.png")}
                style={{ width: 250, height: 75 }}
              />
            </View>
            <View style={{ paddingHorizontal: 30 }}>
              <Text
                style={{ fontSize: 50, fontWeight: "bold", color: APP.primary }}
              >
                Sing up
              </Text>
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: "5%",
                marginTop: 20,
              }}
            >
              <Field label="Name and surname" />
              <Field label="E-mail Address" />
              <Field label="Password" type="password" icoName="lock" />
            </View>
            <View
              style={{
                margin: 40,
                marginTop: 20,
              }}
            >
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ color: "#777" }}>
                  You don't have any accounts ?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("loginNavigation");
                  }}
                >
                  <View>
                    <Text style={{ color: APP.primary }}>Log in</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                margin: 20,
                marginBottom: 20,
              }}
            >
              <Button>Sing up</Button>
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    fontFamily: "Poppins",
  },
  logoHead: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 100,
    marginBottom: 75,
  },
});
