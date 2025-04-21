import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

// Custom Button Component
const CustomButton = ({ text, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const Project3 = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        text="Say hello"
        onPress={() => Alert.alert("Hello!")}
        buttonStyle={{ backgroundColor: '#f06292' }} // pink
      />
      <CustomButton
        text="Say goodbye"
        onPress={() => Alert.alert("Goodbye!")}
        buttonStyle={{ backgroundColor: '#4dd0e1' }} // teal
      />
    </View>
  );
};

export default Project3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
