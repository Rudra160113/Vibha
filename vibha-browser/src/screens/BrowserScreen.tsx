import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function BrowserScreen() {
  const [url, setUrl] = useState("https://google.com");
    const [input, setInput] = useState("");

      function handleSearch() {
          let finalUrl = input.startsWith("http")
                ? input
                      : `https://google.com/search?q=${input.replace(/ /g, "+")}`;
                          setUrl(finalUrl);
                            }

                              return (
                                  <View style={{ flex: 1 }}>
                                        <View style={styles.searchBar}>
                                                <TextInput
                                                          style={styles.input}
                                                                    placeholder="Enter URL or search"
                                                                              value={input}
                                                                                        onChangeText={setInput}
                                                                                                />
                                                                                                        <Button title="Go" onPress={handleSearch} />
                                                                                                              </View>
                                                                                                                    <WebView source={{ uri: url }} style={{ flex: 1 }} />
                                                                                                                        </View>
                                                                                                                          );
                                                                                                                          }

                                                                                                                          const styles = StyleSheet.create({
                                                                                                                            searchBar: {
                                                                                                                                flexDirection: "row",
                                                                                                                                    padding: 5,
                                                                                                                                        backgroundColor: "#eee",
                                                                                                                                          },
                                                                                                                                            input: {
                                                                                                                                                flex: 1,
                                                                                                                                                    borderWidth: 1,
                                                                                                                                                        borderColor: "#ccc",
                                                                                                                                                            padding: 5,
                                                                                                                                                                marginRight: 5,
                                                                                                                                                                    borderRadius: 5,
                                                                                                                                                                      },
                                                                                                                                                                      });
