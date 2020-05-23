import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExploreBar = (props) => (
  <View style={styles.container}>
    <Text>ExploreBar</Text>
  </View>
);
export default ExploreBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
