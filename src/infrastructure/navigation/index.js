import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAunthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAunthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
