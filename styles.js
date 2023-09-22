import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  containerGameConfig: {
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 100,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#aaa",
    alignContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 50,
  },
  description: {
    fontSize: 18,
    padding: 0,
    marginHorizontal: 10,
    marginVertical: 1,
    alignSelf: "flex-start",
  },
  mainText: {
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  buttonInline: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginVertical: 38,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  inlineText: {
    fontSize: 35,
    marginVertical: 30,
  },
});

export default styles;
