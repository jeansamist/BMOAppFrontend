import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function Button({ label = "empty", onPress = () => {} }) {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <View>
        <Text style={{fontFamily: 'Poppins_700Bold', color: "#fff", textAlign: "center", fontSize: 18}}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: "#000",
    borderRadius: 50,
  },
});
