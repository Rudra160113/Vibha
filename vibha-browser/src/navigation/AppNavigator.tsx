import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import BrowserScreen from "../screens/BrowserScreen";
import HistoryScreen from "../screens/HistoryScreen";
import DownloadsScreen from "../screens/DownloadsScreen";
import SettingsScreen from "../screens/SettingsScreen";

export type RootStackParamList = {
  Login: undefined;
    Browser: undefined;
      History: undefined;
        Downloads: undefined;
          Settings: undefined;
          };

          const Stack = createStackNavigator<RootStackParamList>();

          export default function AppNavigator() {
            return (
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                      <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen name="Browser" component={BrowserScreen} />
                                  <Stack.Screen name="History" component={HistoryScreen} />
                                        <Stack.Screen name="Downloads" component={DownloadsScreen} />
                                              <Stack.Screen name="Settings" component={SettingsScreen} />
                                                  </Stack.Navigator>
                                                    );
                                                    }
                                                    