import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import { useVoiceSearch } from "../../hooks/useVoiceSearch";

export default function VoiceSearchBar() {
  const [query, setQuery] = useState("");
    const { startListening } = useVoiceSearch();

      return (
          <View style={{ flexDirection: "row", padding: 10 }}>
                <TextInput
                        style={{ flex: 1, borderWidth: 1, padding: 5 }}
                                placeholder="Type or speak..."
                                        value={query}
                                                onChangeText={setQuery}
                                                      />
                                                            <Button
                                                                    title="🎤"
                                                                            onPress={() => startListening((text) => setQuery(text))}
                                                                                  />
                                                                                      </View>
                                                                                        );
                                                                                        }
                                                                                        