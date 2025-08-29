import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function AccessibilityMenu() {
  const [fontSize, setFontSize] = useState(16);
    const [quality, setQuality] = useState("Auto");

      return (
          <View style={{ padding: 20 }}>
                <Text style={{ fontSize, marginBottom: 10 }}>Sample Text Preview</Text>

                      <Text>Font Size</Text>
                            <View style={{ flexDirection: "row" }}>
                                    <Button title="A-" onPress={() => setFontSize(Math.max(10, fontSize - 2))} />
                                            <Button title="A+" onPress={() => setFontSize(Math.min(40, fontSize + 2))} />
                                                  </View>

                                                        <Text style={{ marginTop: 20 }}>Download Quality</Text>
                                                              <View style={{ flexDirection: "row" }}>
                                                                      {["360p", "720p", "1080p", "Auto"].map((q) => (
                                                                                <Button key={q} title={q} onPress={() => setQuality(q)} />
                                                                                        ))}
                                                                                              </View>

                                                                                                    <Text style={{ marginTop: 10 }}>Current: {quality}</Text>
                                                                                                        </View>
                                                                                                          );
                                                                                                          }
                                                                                                          