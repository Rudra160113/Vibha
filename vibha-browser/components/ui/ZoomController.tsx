import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import { WebView } from "react-native-webview";

export default function ZoomController() {
  const [zoom, setZoom] = useState(100);

    const adjustZoom = (value: number) => {
        const newZoom = Math.min(300, Math.max(10, zoom + value));
            setZoom(newZoom);
              };

                return (
                    <View style={{ flex: 1 }}>
                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                  <Button title="-" onPress={() => adjustZoom(-10)} />
                                          <Text>{zoom}%</Text>
                                                  <Button title="+" onPress={() => adjustZoom(10)} />
                                                        </View>
                                                              <WebView
                                                                      source={{ uri: "https://google.com" }}
                                                                              style={{ flex: 1 }}
                                                                                      injectedJavaScript={`document.body.style.zoom = '${zoom}%';`}
                                                                                            />
                                                                                                </View>
                                                                                                  );
                                                                                                  }
                                                                                                  