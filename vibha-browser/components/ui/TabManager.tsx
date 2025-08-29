import React, { useState } from "react";
import { View, Button, Text } from "react-native";

type Tab = {
  id: number;
    url: string;
    };

    export default function TabManager() {
      const [tabs, setTabs] = useState<Tab[]>([{ id: 1, url: "https://google.com" }]);

        function addTab() {
            setTabs([...tabs, { id: Date.now(), url: "https://google.com" }]);
              }

                return (
                    <View style={{ padding: 10 }}>
                          <Button title="New Tab" onPress={addTab} />
                                {tabs.map((tab) => (
                                        <Text key={tab.id}>{tab.url}</Text>
                                              ))}
                                                  </View>
                                                    );
                                                    }
                                                    