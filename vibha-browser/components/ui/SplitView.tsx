import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function SplitView() {
  const [urls, setUrls] = useState([
      "https://google.com",
          "https://bing.com",
            ]);
              const [enabled, setEnabled] = useState(false);

                return (
                    <View style={{ flex: 1 }}>
                          <Button
                                  title={enabled ? "Disable Split View" : "Enable Split View"}
                                          onPress={() => setEnabled(!enabled)}
                                                />
                                                      {enabled ? (
                                                              <View style={styles.split}>
                                                                        <WebView source={{ uri: urls[0] }} style={{ flex: 1 }} />
                                                                                  <WebView source={{ uri: urls[1] }} style={{ flex: 1 }} />
                                                                                          </View>
                                                                                                ) : (
                                                                                                        <WebView source={{ uri: urls[0] }} style={{ flex: 1 }} />
                                                                                                              )}
                                                                                                                  </View>
                                                                                                                    );
                                                                                                                    }

                                                                                                                    const styles = StyleSheet.create({
                                                                                                                      split: {
                                                                                                                          flex: 1,
                                                                                                                              flexDirection: "row",
                                                                                                                                },
                                                                                                                                });
                                                                                                                                