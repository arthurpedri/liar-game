import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable } from "react-native";
import styles from "./styles.js";

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
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#aaa",
          },
          headerTintColor: "black",
          headerTitleStyle: {
            //fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      >
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
