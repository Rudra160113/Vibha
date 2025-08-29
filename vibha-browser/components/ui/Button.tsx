import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function UIButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#FFD700",
    alignItems: "center",
    marginVertical: 5,
  },
  text: { color: "#000", fontWeight: "600" },
});
