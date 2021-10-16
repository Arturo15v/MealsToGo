import React from "react";
//import { Platform } from "react-native";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurants-detail.screen";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screens";

const RestaurantStack = createStackNavigator();

const createScreenOptions = () => {
  if (Platform.OS === "ios") {
    return {
      headerShown: false,
      ...TransitionPresets.ModalPresentationIOS,
    };
  } else {
    return {
      headerShown: false,
    };
  }
  /*
  return {
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS,
  };*/
};

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={createScreenOptions}>
      <RestaurantStack.Screen name="Restaurants" component={RestaurantScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

//yarn add @react-navigation/stack
