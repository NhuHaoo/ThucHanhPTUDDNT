import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Project4 = () => {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={myStyle.container}>
      <Text style={myStyle.text}>
        You've pressed the button {count} {count === 1 ? "time" : "times"}!
      </Text>
      <TouchableOpacity style={myStyle.button} onPress={handlePress}>
        <Text style={myStyle.buttonText}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Project4;

const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f2f2f2"
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: "#333"
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8
  },
  buttonText: {
    color: "white",
    fontSize: 16
  }
});
