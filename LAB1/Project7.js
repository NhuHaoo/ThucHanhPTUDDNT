import React, { useState } from "react";
import { TextInput, Text, View, StyleSheet, Button } from "react-native";

const Project7 = () => {
  const [name, setName] = useState("");

  return (
    <View style={myStyle.container}>
      <Text style={myStyle.label}>What is your name?</Text>
      <TextInput
        style={myStyle.input}
        placeholder="John Doe"
        placeholderTextColor="rgba(0, 0, 0, 0.5)"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <Button
        title="Say Hello"
        onPress={() => {
          alert(`Hello, ${name}!`);
          setName("");
        }}
      />
    </View>
  );
};

export default Project7;

const myStyle = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    marginTop: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});
