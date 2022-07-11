import { View, StyleSheet, TextInput } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { APP } from "../../helpers/data";
export default function Field({
  label = "Empty",
  type = "text",
  icoName = "user",
  defaultValue = '',
  onChangeText = () => {},
}) {
  const [value, setValue] = useState(defaultValue);
  let isPassword = false;
  if (type === "password") {
    isPassword = true;
  }
  return (
    <View style={{ flex: 1, flexDirection: "row", width: "100%", marginTop: 10, borderColor: APP.primary, borderWidth: 1, borderRadius: 50, }}>
      <View style={{ width: "85%" }}>
        <TextInput
          placeholder={label}
          value={value}
          style={styles.input}
          onChangeText={(e) => {
            if (type === 'number') {
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
          }}
          secureTextEntry={isPassword}
        />
      </View>
      <View style={styles.ico}>
        <FontAwesomeIcon size={24} color={APP.primary} name={icoName} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderRadius: 50,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    width: "100%",
  },
  ico: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 0,
    width: "10%",
  },
});
