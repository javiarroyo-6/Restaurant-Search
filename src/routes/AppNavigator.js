import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SearchStackNavigator } from "../routes/SearchStackNavigator";

export const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <SearchStackNavigator />
    </NavigationContainer>
  );
};
