import { View, StyleSheet, TextInput } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import React, { useState } from "react";
import { Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import { APP } from "../../helpers/data";
export default function Field({
  label = "Empty",
  type = "text",
  icoName = "user",
  defaultValue = '',
  onChangeText = () => {},
}) {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
  });
  const [value, setValue] = useState(defaultValue);
  let isPassword = false;
  if (type === "password") {
    isPassword = true;
  }
  function handleChange(e) {
    if (type === 'numeric') {
      if (parseFloat(e)) {
        setValue(parseFloat(e));
        onChangeText(parseFloat(e));
        return
      } else {
        if (e === '') {
          setValue(e);
          onChangeText(e);
          return
        }
        return
      }
    }
    setValue(e);
    onChangeText(e);
  }
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', width: "100%", marginBottom: 10, borderColor: APP.border, borderWidth: 1, borderRadius: 6 }}>
      <View style={{paddingVertical: 7, paddingHorizontal: 15, paddingRight: 0}}>
        <MaterialIcon size={24} color={APP.border2} name={icoName} />
      </View>
      <View style={{ width: "85%", }}>
        <TextInput
          placeholder={label}
          value={value}
          
          style={{ fontFamily: 'Poppins_400Regular', marginTop: 5, paddingVertical: 7, paddingHorizontal: 15 }}
          placeholderTextColor="#D8D8D8"
          onChangeText={handleChange}
          secureTextEntry={isPassword}
        />
      </View>
    </View>
  );
}
