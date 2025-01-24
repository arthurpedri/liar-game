import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import styles from "./styles.js";
import { Comidas } from "./assets/data/Comidas.js";
import { Animais } from "./assets/data/Animais.js";
import { Criaturas } from "./assets/data/Criaturas.js";
import { Plantas } from "./assets/data/Plantas.js";
import { Turismo } from "./assets/data/Turismo.js";
import { Empregos } from "./assets/data/Empregos.js";
import { Corpo } from "./assets/data/Corpo.js";
import { Frutas } from "./assets/data/Frutas.js";
import { Vegetais } from "./assets/data/Vegetais.js";
import { Hobbies } from "./assets/data/Hobbies.js";
import { Desastres } from "./assets/data/Desastres.js";
import { Matérias } from "./assets/data/Matérias.js";
import { Esportes } from "./assets/data/Esportes.js";
import { Eletrônicos } from "./assets/data/Eletrônicos.js";
import { Celebridades } from "./assets/data/Celebridades.js";
import { Ciência } from "./assets/data/Ciência.js";
import { Geografia } from "./assets/data/Geografia.js";
import { Lugares } from "./assets/data/Lugares.js";

const categories = new Map([
  ["Comidas", Comidas],
  ["Animais", Animais],
  ["Ciência", Ciência],
  ["Criaturas", Criaturas],
  ["Empregos", Empregos],
  ["Esportes", Esportes],
  ["Celebridades", Celebridades],
  ["Eletrônicos", Eletrônicos],
  ["Turismo", Turismo],
  ["Lugares", Lugares],
  ["Geografia", Geografia],
  ["Frutas", Frutas],
  ["Hobbies", Hobbies],
  ["Plantas", Plantas],
  ["Corpo", Corpo],
  ["Vegetais", Vegetais],
  ["Desastres", Desastres],
  ["Matérias", Matérias],
]);

let savedPlayerCount = 3;

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
            category: "Comidas",
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
  const [playerCount, setPlayerCount] = useState(savedPlayerCount);
  const { category } = route.params;
  const [customWord, setCustomWord] = useState("");
  const limitPlayers = (count: number) =>
    count > 3 ? setPlayerCount(count) : setPlayerCount(3);
  return (
    <View style={styles.containerGameConfig}>
      <Text style={styles.inlineText}>Jogadores: {playerCount}</Text>

      <Pressable
        style={styles.buttonInline}
        onPress={() => limitPlayers(playerCount - 1)}
      >
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Pressable
        style={styles.buttonInline}
        onPress={() => setPlayerCount(playerCount + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      <Text style={styles.inlineText}>Tema: {category}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("CategorySelection")}
      >
        <Text style={styles.buttonText}>Escolher outro Tema</Text>
      </Pressable>

      <Pressable
        style={styles.buttonInlineFix}
        onPress={() =>
          navigation.navigate("Game", {
            category: category,
            customWord: "",
            playerCount: playerCount,
          })
        }
      >
        <Text style={styles.buttonText}>Começar Jogo</Text>
      </Pressable>

      <Text style={styles.inlineText}>Jogar com palavra customizada</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Palavra Customizada"
        onChangeText={(newText) => setCustomWord(newText)}
        defaultValue={customWord}
      />
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Game", {
            category: "Customizado",
            customWord: customWord,
            playerCount: playerCount,
          })
        }
      >
        <Text style={styles.buttonText}>Jogo customizado</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

function CategorySelection({ navigation }) {
  const categoryList = [...categories.keys()];
  return (
    <View style={styles.scroll}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Temas</Text>
        {categoryList.map((category) => {
          return (
            <Pressable
              key={category}
              style={styles.categoryButton}
              onPress={() =>
                navigation.navigate("GameConfiguration", {
                  category: category,
                })
              }
            >
              <Text style={styles.categoryButtonText}>{category}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

function getRandomWord(category: string): string {
  const list = categories.get(category);
  if (list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  return "";
}

function getLiarCount(playercount: number): number {
  return Math.floor(Math.random() * playercount + 1); // Starts with 1
}

function Game({ route, navigation }) {
  const { category, customWord, playerCount } = route.params;
  savedPlayerCount = playerCount;
  const [word, setWord] = useState(() =>
    customWord === "" ? getRandomWord(category) : customWord
  );
  const [liarCount, setLiarCount] = useState(() => getLiarCount(playerCount));
  const [roundCount, setRoundCount] = useState(1);
  const [hidden, setHidden] = useState(true);
  return (
    <View style={styles.containerGame}>
      <Text style={styles.title}>{category}</Text>
      <View style={styles.answerContainer}></View>

      {hidden && (
        <>
          <Text style={styles.title}>Aperte o botão</Text>
          <Text style={styles.title}>para ver papel</Text>
          <Pressable style={styles.button} onPress={() => setHidden(false)}>
            <Text style={styles.buttonText}>Mostrar</Text>
          </Pressable>
        </>
      )}
      {!hidden && roundCount !== liarCount && (
        <>
          <Text style={styles.title}>A palavra é </Text>
          <View style={styles.answerContainer}>
            <Text style={styles.title}>"{word}"</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              setRoundCount(roundCount + 1);
              setHidden(true);
              if (roundCount === playerCount) {
                navigation.navigate("Home");
              }
            }}
          >
            <Text style={styles.buttonText}>Esconder</Text>
          </Pressable>
        </>
      )}
      {!hidden && roundCount === liarCount && (
        <>
          <Text style={styles.title}>Voce é</Text>
          <View style={styles.answerContainer}>
            <Text style={styles.title}>o Mentiroso</Text>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => {
              setRoundCount(roundCount + 1);
              setHidden(true);
              if (roundCount === playerCount) {
                navigation.navigate("Home");
              }
            }}
          >
            <Text style={styles.buttonText}>Esconder</Text>
          </Pressable>
        </>
      )}

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
            backgroundColor: "#ccc",
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
        <Stack.Screen name="Game" component={Game} options={{ title: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
