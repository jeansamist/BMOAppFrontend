import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { APP } from "../helpers/data";
import Field from "../components/form/Field";
import Button from "./../components/form/Button";
export default function LoginScreen(props) {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  function handlePress() {
    let data = new FormData();
    data.append("mail", mail);
    data.append("password", password);
    fetch(APP.server + "?action=login", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data) {
          props.navigation.navigate("auth");
        } else {
          setShowError(data.error);
        }
      });
    // console.log(mail, password);
  }

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
                Login
              </Text>
            </View>
            <View
              style={{
                width: "90%",
                marginHorizontal: "5%",
                marginTop: 20,
              }}
            >
              <Field onChangeText={setMail} label="E-mail Address" />
              <Field
                onChangeText={setPassword}
                label="Password"
                type="password"
                icoName="lock"
              />
              {showError ? (
                <Text style={{ padding: 20, color: APP.colorRed }}>
                  {showError}
                </Text>
              ) : null}
            </View>
            <View
              style={{
                margin: 40,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("fogotPasswordNavigation");
                }}
              >
                <View>
                  <Text style={{ color: "#777" }}>Forgot password ?</Text>
                </View>
              </TouchableOpacity>

              <View style={{ flex: 1, flexDirection: "row" }}>
                <Text style={{ color: "#777" }}>
                  You don't have any accounts ?{" "}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("registerNavigation");
                  }}
                >
                  <View>
                    <Text style={{ color: APP.primary }}>Sing up</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View>
            <View
              style={{
                margin: 20,
                marginBottom: 20,
              }}
            >
              <Button
                onPress={() => {
                  handlePress();
                }}
              >
                Login
              </Button>
            </View>
          </View>
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
