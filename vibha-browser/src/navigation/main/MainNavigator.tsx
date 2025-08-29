import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import SettingsScreen from "../../screens/settings/SettingsScreen";

export type MainDrawerParamList = {
  Browser: undefined;
    Settings: undefined;
    };

    const Drawer = createDrawerNavigator<MainDrawerParamList>();

    export default function MainNavigator() {
      return (
          <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Browser" component={TabNavigator} />
                      <Drawer.Screen name="Settings" component={SettingsScreen} />
                          </Drawer.Navigator>
                            );
                            }
                            