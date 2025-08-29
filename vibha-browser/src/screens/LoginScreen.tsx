import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { supabase } from "../config/supabase";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type LoginScreenNavProp = StackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavProp;
  };

  export default function LoginScreen({ navigation }: Props) {
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

        async function signIn() {
            const { error } = await supabase.auth.signInWithPassword({
                  email,
                        password,
                            });

                                if (error) {
                                      Alert.alert("Error", error.message);
                                          } else {
                                                navigation.replace("Browser");
                                                    }
                                                      }

                                                        return (
                                                            <View style={styles.container}>
                                                                  <Text style={styles.title}>Vibha Browser</Text>
                                                                        <TextInput
                                                                                style={styles.input}
                                                                                        placeholder="Email"
                                                                                                value={email}
                                                                                                        onChangeText={setEmail}
                                                                                                              />
                                                                                                                    <TextInput
                                                                                                                            style={styles.input}
                                                                                                                                    placeholder="Password"
                                                                                                                                            secureTextEntry
                                                                                                                                                    value={password}
                                                                                                                                                            onChangeText={setPassword}
                                                                                                                                                                  />
                                                                                                                                                                        <Button title="Login" onPress={signIn} />
                                                                                                                                                                            </View>
                                                                                                                                                                              );
                                                                                                                                                                              }

                                                                                                                                                                              const styles = StyleSheet.create({
                                                                                                                                                                                container: { flex: 1, justifyContent: "center", alignItems: "center" },
                                                                                                                                                                                  title: { fontSize: 24, marginBottom: 20 },
                                                                                                                                                                                    input: {
                                                                                                                                                                                        borderWidth: 1,
                                                                                                                                                                                            borderColor: "#ccc",
                                                                                                                                                                                                padding: 10,
                                                                                                                                                                                                    marginVertical: 5,
                                                                                                                                                                                                        width: "80%",
                                                                                                                                                                                                            borderRadius: 5,
                                                                                                                                                                                                              },
                                                                                                                                                                                                              });
                                                                                                                                                                                                              