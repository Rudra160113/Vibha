import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Button } from "react-native";

type HistoryItem = {
  id: string;
    title: string;
      url: string;
      };

      export default function HistoryScreen() {
        const [history, setHistory] = useState<HistoryItem[]>([
            { id: "1", title: "Google", url: "https://google.com" },
              ]);
                const [query, setQuery] = useState("");

                  const filtered = history.filter(
                      (h) => h.title.includes(query) || h.url.includes(query)
                        );

                          return (
                              <View style={{ flex: 1, padding: 10 }}>
                                    <TextInput
                                            placeholder="Search history"
                                                    value={query}
                                                            onChangeText={setQuery}
                                                                    style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
                                                                          />
                                                                                <FlatList
                                                                                        data={filtered}
                                                                                                keyExtractor={(item) => item.id}
                                                                                                        renderItem={({ item }) => (
                                                                                                                  <View
                                                                                                                              style={{
                                                                                                                                            flexDirection: "row",
                                                                                                                                                          justifyContent: "space-between",
                                                                                                                                                                        marginBottom: 10,
                                                                                                                                                                                    }}
                                                                                                                                                                                              >
                                                                                                                                                                                                          <Text>{item.title}</Text>
                                                                                                                                                                                                                      <Button
                                                                                                                                                                                                                                    title="✂️"
                                                                                                                                                                                                                                                  onPress={() =>
                                                                                                                                                                                                                                                                  setHistory((prev) => prev.filter((h) => h.id !== item.id))
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                            />
                                                                                                                                                                                                                                                                                                      </View>
                                                                                                                                                                                                                                                                                                              )}
                                                                                                                                                                                                                                                                                                                    />
                                                                                                                                                                                                                                                                                                                        </View>
                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                          