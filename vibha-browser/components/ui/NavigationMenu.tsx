import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function NavigationMenu({ navigation }: any) {
  return (
      <View style={styles.menu}>
            <Button title="History" onPress={() => navigation.navigate("History")} />
                  <Button title="Downloads" onPress={() => navigation.navigate("Downloads")} />
                        <Button title="Settings" onPress={() => navigation.navigate("Settings")} />
                            </View>
                              );
                              }

                              const styles = StyleSheet.create({
                                menu: {
                                    flexDirection: "row",
                                        justifyContent: "space-around",
                                            backgroundColor: "#eee",
                                                paddingVertical: 10,
                                                  },
                                                  });
                                                  