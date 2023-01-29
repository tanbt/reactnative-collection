import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Buffer } from "buffer";

const hardcodeImg = {
  uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
};

// DOES NOT WORK
export function TestingComponent() {
  const [imageSource1, setImageSource1] = useState<any>(null);
  const [imageSource2, setImageSource2] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Also DOES NOT WORK
  async function handleFetchBinary1() {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://www.shutterstock.com/create/assets/asset-gateway/template/previews/23631-0.jpeg?width=480",
        { responseType: "text", responseEncoding: "base64" }
      );
      console.log("got data 1: ", res.data);
      setImageSource1(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error("error 1", err);
      setIsLoading(false);
    }
  }

  async function handleFetchBinary2() {
    axios
      .get(
        "https://www.shutterstock.com/create/assets/asset-gateway/template/previews/23631-0.jpeg?width=480",
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        console.log("got data 2: ", response.data);
        const base64 = Buffer.from(response.data, "binary").toString("base64");
        const source = { uri: `data:;base64,${base64}` };
        setImageSource2(source);
      })
      .catch((err) => {
        console.error("error 2", err);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    // handleFetchBinary1();
    handleFetchBinary2();
  }, []);

  return (
    <View>
      <Image source={imageSource1} />
      <Image source={imageSource2} />
    </View>
  );
}
