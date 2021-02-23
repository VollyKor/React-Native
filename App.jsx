import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegForm from "./components/RegForm";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/PhotoBG.jpg")}
        style={styles.bckg}
        imageStyle={styles.bckgImage}
      >
        <RegForm />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bckg: {
    flex: 1,
  },
  bckgImage: {
    resizeMode: "stretch",
  },
});
