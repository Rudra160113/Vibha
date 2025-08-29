import React, { useState } from "react";
import { View, Button, Text, FlatList } from "react-native";

type Tab = {
  id: number;
    url: string;
      frozen: boolean;
      };

      export default function TabFreezeManager() {
        const [tabs, setTabs] = useState<Tab[]>([
            { id: 1, url: "https://google.com", frozen: false },
              ]);

                function addTab() {
                    const newTab: Tab = { id: Date.now(), url: "https://google.com", frozen: false };
                        setTabs((prev) => {
                              const updated = [...prev, newTab];
                                    return updated.map((t, i) => ({ ...t, frozen: i >= updated.length - 5 }));
                                        });
                                          }

                                            return (
                                                <View style={{ padding: 10 }}>
                                                      <Button title="New Tab" onPress={addTab} />
                                                            <FlatList
                                                                    data={tabs}
                                                                            keyExtractor={(tab) => tab.id.toString()}
                                                                                    renderItem={({ item }) => (
                                                                                              <Text>
                                                                                                          {item.url} {item.frozen ? "❄️ Frozen" : "🔥 Active"}
                                                                                                                    </Text>
                                                                                                                            )}
                                                                                                                                  />
                                                                                                                                      </View>
                                                                                                                                        );
                                                                                                                                        }
                                                                                                                                        