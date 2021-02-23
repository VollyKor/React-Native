import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function RegForm() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.avatarThumb}>
        <Image style={styles.avatar} source={require("../assets/icon.png")} />
        <AntDesign
          name="pluscircleo"
          // style={styles.iconClose}
          size={25}
          color="#FF6C00"
          // borderRadius="5"
        />
      </View>
      <Text style={styles.text}>Form</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    position: "relative",
    marginTop: 249,
    height: 549,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    alignItems: "center",
  },

  text: {},

  avatarThumb: {
    position: "relative",
    top: -60,
    borderRadius: 16,
  },

  avatar: {
    width: 120,
    height: 120,

    borderRadius: 16,
  },
  iconClose: {
    position: "absolute",
    top: 81,
    left: 107.5,
  },
});
