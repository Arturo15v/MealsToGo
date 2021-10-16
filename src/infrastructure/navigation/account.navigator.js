import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const createScreenOptions = () => {
  return {
    headerShown: false,
  };
};

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={createScreenOptions}>
    <Stack.Screen
      name="Main"
      component={() => (
        <View>
          <Text>Account screen</Text>
        </View>
      )}
    />
    <Stack.Screen
      name="Login"
      component={() => (
        <View>
          <Text>login</Text>
        </View>
      )}
    />
  </Stack.Navigator>
);
