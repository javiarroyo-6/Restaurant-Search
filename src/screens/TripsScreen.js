import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const TripsScreen = (props) => (
  <View style={styles.container}>
    <Text>TripsScreen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
