import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext, AppState } from "../store/AppContext";

function WelcomeScreen() {
  const appCtx = useContext<AppState>(AppContext);
  const [fetchedMessage, setFetchMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get(
        `https://udemy-reactnative-course-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${appCtx.token}`
      )
      .then((response) => setFetchMessage(response.data));
  }, [appCtx.token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
