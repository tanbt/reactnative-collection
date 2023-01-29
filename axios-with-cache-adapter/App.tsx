import Axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { setupCache } from "axios-cache-interceptor";

// In memory cache
const axios = setupCache(Axios, {
  ttl: 1 * 60 * 1000, // 1m
});
export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  async function handleFetch() {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:3000/public/getKamupakPoints/"
      );
      setData(res.data.points.length);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>{data ? data : "Fetch result will be showed here."}</Text>
      <Button
        title={isLoading ? "Fetching..." : "Fetch"}
        onPress={handleFetch}
      />

      <Button title="Reset" onPress={() => setData(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
