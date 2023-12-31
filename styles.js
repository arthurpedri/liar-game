import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scroll: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  containerGameConfig: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    paddingBottom: 50,
  },
  containerGame: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    paddingBottom: 50,
  },
  scrollContainer: {
    // flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 50,
  },
  answerContainer: {
    backgroundColor: "#aaa",
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
  buttonInlineFix: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginTop: 60,
  },
  categoryButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginVertical: 15,
  },
  buttonInline: {
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginVertical: 38,
    marginHorizontal: 3,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  categoryButtonText: {
    fontSize: 35,
    lineHeight: 45,
    letterSpacing: 0.25,
    color: "white",
  },
  textInput: {
    fontSize: 35,
    textAlign: "center",
    paddingBottom: 20,
  },
  inlineText: {
    fontSize: 35,
    marginTop: 30,
    marginBottom: 20,
  },
});

export default styles;
