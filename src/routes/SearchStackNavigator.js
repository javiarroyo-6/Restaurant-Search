import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchScreen } from "../screens/SearchScreen";
import { DetailScreen } from "../screens/DetailScreen";

const SearchStack = createStackNavigator();

export const SearchStackNavigator = () => {
  return (
    <SearchStack.Navigator initialRouteName="SearchScreen">
      <SearchStack.Screen component={SearchScreen} name="Search" />
      <SearchStack.Screen component={DetailScreen} name="DetailScreen" />
    </SearchStack.Navigator>
  );
};
