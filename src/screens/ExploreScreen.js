import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ExploreScreen = (props) => (
  <View style={styles.container}>
    <Text>ExploreScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
