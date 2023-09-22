import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liar Game</Text>
      <Text style={styles.description}>Aperte o botão para começar.</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("GameConfiguration")}
      >
        <Text style={styles.buttonText}>Jogar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function GameConfiguration({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test</Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="GameConfiguration"
          component={GameConfiguration}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
  },
  description: {
    fontSize: 20,
    margin: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
