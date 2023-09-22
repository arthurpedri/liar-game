import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./styles.js";
import { categories } from "./assets/categories.js";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liar Game</Text>
      <View style={styles.mainText}>
        <Text style={styles.description}>
          1. Escolher tema e número de jogadores.
        </Text>
        <Text style={styles.description}>
          2. Todos jogadores recebem a palavra, exceto o mentiroso.
        </Text>
        <Text style={styles.description}>
          3. Depois de verificar seu papel, aperte esconder e passe para o
          próximo jogador.
        </Text>
        <Text style={styles.description}>
          4. Começar o jogo quando todos souberem seus papéis.
        </Text>
        <Text style={styles.description}>
          5. Jogadores explicam a palavra um por um, o mentiroso deve tentar
          imaginar a palavra e explicar.
        </Text>
        <Text style={styles.description}>
          6. Depois de alguns turnos (3 é o recomendado), vote no jogador que
          parece ser o mentiroso.
        </Text>
        <Text style={styles.description}>
          7. Se o mentiroso não foi escolhido ou ele é escolhido e acerta a
          palavra, o mentiroso ganha. Em todos os outros casos o mentiroso
          perde.
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("GameConfiguration", {
            category: categories[0],
          })
        }
      >
        <Text style={styles.buttonText}>Jogar</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function GameConfiguration({ route, navigation }) {
  const [playerCount, setPlayerCount] = useState(3);
  const { category } = route.params;
  return (
    <View style={styles.containerGameConfig}>
      <Text style={styles.inlineText}>Tema: {category}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("CategorySelection")}
      >
        <Text style={styles.buttonText}>Escolher Tema</Text>
      </Pressable>
      <Text style={styles.inlineText}>Jogadores: {playerCount}</Text>

      <Pressable
        style={styles.buttonInline}
        onPress={() => setPlayerCount(playerCount - 1)}
      >
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Pressable
        style={styles.buttonInline}
        onPress={() => setPlayerCount(playerCount + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Começar Jogo</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function CategorySelection({ navigation }) {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.title}>Temas</Text>
      {categories.map((category) => {
        return (
          <Pressable
            style={styles.button}
            onPress={() =>
              navigation.navigate("GameConfiguration", {
                category: category,
              })
            }
          >
            <Text style={styles.buttonText}>{category}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
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
        <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
        <Stack.Screen
          name="GameConfiguration"
          component={GameConfiguration}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="CategorySelection"
          component={CategorySelection}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
