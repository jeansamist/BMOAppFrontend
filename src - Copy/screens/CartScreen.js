import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { APP } from "../helpers/data";
import Field from "../components/form/Field";
import Button from "../components/form/Button2";
import React from "react";
export default function CartScreen() {
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: '#eef4f7' }}>
      <ScrollView style={{ height: "100%" }}>
        <View
          style={{
            padding: 20,
            width: "95%",
            background: APP.secondary,
            borderRadius: 20,
            margin: "2.5%",
          }}
        >
          <Text
            style={{
              color: APP.primary,
              fontWeight: "bold",
            }}
          >
            M. John Doe
          </Text>
        </View>
        <View
          style={{
            padding: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            Products List
          </Text>
          <View
            style={{
              padding: 20,
              borderBottomWidth: 3,
              borderBottomColor: "#000",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  flex: 0.5,
                }}
              >
                Chair
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                x3
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                $171
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  flex: 0.5,
                }}
              >
                Chair
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                x3
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                $171
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  flex: 0.5,
                }}
              >
                Chair
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                x3
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                $171
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  flex: 0.5,
                }}
              >
                Chair
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                x3
              </Text>
              <Text
                style={{
                  flex: 0.25,
                }}
              >
                $171
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "right",
              fontSize: 25,
            }}
          >
            $171
          </Text>
          <Field label="Location" icoName="map" />
          <View
            style={{
              marginTop: 20,
            }}
          ></View>
          <Button label="Command" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
