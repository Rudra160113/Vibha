import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function UIInput({
  value,
  placeholder,
  secure,
  onChangeText,
}: {
  value: string;
  placeholder: string;
  secure?: boolean;
  onChangeText: (t: string) => void;
}) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      secureTextEntry={secure}
      onChangeText={onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginVertical: 5,
  },
});
