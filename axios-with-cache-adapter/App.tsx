import Axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { setupCache } from "axios-cache-interceptor";
import { clearLocalData } from "./CustomLocalStorage";
import { customStorage } from "./CustomStorage";

// In memory cache
// const axios = setupCache(Axios, {
//   ttl: 1 * 60 * 1000, // 1m
// });

const axios = setupCache(Axios, { storage: customStorage });

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  async function handleFetch() {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "http://localhost:3000/public/getKamupakPoints/"
      );
      console.log(res.data);
      setData(res.data.points.length);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  return (
    <View style={s.container}>
      <StatusBar style="auto" />
      <Text>{data ? data : "Fetch result will be showed here."}</Text>
      <Button
        title={isLoading ? "Fetching..." : "Fetch"}
        onPress={handleFetch}
      />
      <Button title="Reset" onPress={() => setData(null)} />

      <View style={s.divider}></View>
      <Text>The image below is cached</Text>

      <Button title="Clear cache" onPress={() => clearLocalData()} />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    width: "80%",
    height: 4,
    borderBottomWidth: 2,
    borderColor: "orange",
  },
});
