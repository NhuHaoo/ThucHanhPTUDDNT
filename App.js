import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Project1 from './LAB1/Project1';
import Project2 from './LAB1/Project2';
import Project3 from './LAB1/Project3';
import Project4 from './LAB1/Project4';
import Project5 from './LAB1/Project5';
import Project6 from './LAB1/Project6';
import Project7 from './LAB1/Project7';
import Project8 from './LAB1/Project8';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  const projects = [
    { title: 'Project 1', route: 'Project1' },
    { title: 'Project 2', route: 'Project2' },
    { title: 'Project 3', route: 'Project3' },
    { title: 'Project 4', route: 'Project4' },
    { title: 'Project 5', route: 'Project5' },
    { title: 'Project 6', route: 'Project6' },
    { title: 'Project 7', route: 'Project7' },
    { title: 'Project 8', route: 'Project8' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>📚 THỰC HÀNH 1</Text>
      {projects.map((project, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate(project.route)}
        >
          <Text style={styles.buttonText}>{project.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Trang Chủ" component={HomeScreen} />
        <Stack.Screen name="Project1" component={Project1} />
        <Stack.Screen name="Project2" component={Project2} />
        <Stack.Screen name="Project3" component={Project3} />
        <Stack.Screen name="Project4" component={Project4} />
        <Stack.Screen name="Project5" component={Project5} />
        <Stack.Screen name="Project6" component={Project6} />
        <Stack.Screen name="Project7" component={Project7} />
        <Stack.Screen name="Project8" component={Project8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
    gap: 15,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#4C9A2A',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 5,
    elevation: 3,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
