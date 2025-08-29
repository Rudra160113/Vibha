import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./auth/AuthNavigator";
import MainNavigator from "./main/MainNavigator";

export type RootStackParamList = {
  Auth: undefined;
    Main: undefined;
    };

    const Stack = createNativeStackNavigator<RootStackParamList>();

    export default function RootNavigator() {
      return (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Auth" component={AuthNavigator} />
                      <Stack.Screen name="Main" component={MainNavigator} />
                          </Stack.Navigator>
                            );
                            }
                            