import React from "react";
import { ExploreScreen } from "../screens/ExploreScreen";
import { TripsScreen } from "../screens/TripsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const ExploreStack = createStackNavigator();

export const ExploreStackNavigator = () => {
  return (
    <ExploreStack.Navigator>
      <ExploreStack.Screen component={ExploreScreen} name="Explore" />
      <ExploreStack.Screen component={TripsScreen} name="Trips" />
    </ExploreStack.Navigator>
  );
};
