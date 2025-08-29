import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import HistoryScreen from "../../screens/history/HistoryScreen";
import DownloadsScreen from "../../screens/downloads/DownloadsScreen";

export type TabParamList = {
  Home: undefined;
    History: undefined;
      Downloads: undefined;
      };

      const Tab = createBottomTabNavigator<TabParamList>();

      export default function TabNavigator() {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                  <Tab.Screen name="Home" component={HomeScreen} />
                        <Tab.Screen name="History" component={HistoryScreen} />
                              <Tab.Screen name="Downloads" component={DownloadsScreen} />
                                  </Tab.Navigator>
                                    );
                                    }
                                    