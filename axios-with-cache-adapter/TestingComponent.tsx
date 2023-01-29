import axios from "axios";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Buffer } from "buffer";

// DOES NOT WORK
export function TestingComponent() {
  const [imageSource, setImageSource] = useState<any>(null);
  const [imageBase64Data, setImageBase64Data] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Also DOES NOT WORK
  async function handleFetchBinary() {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
        { responseType: "text", responseEncoding: "base64" }
      );
      console.log(res.data);
      setImageBase64Data(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    axios
      .get(
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        const base64 = Buffer.from(response.data, "binary").toString("base64");
        const source = { uri: `data:;base64,${base64}` };
        setImageSource(source);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      {imageSource ? <Image source={imageSource} /> : <Text>Loading...</Text>}
    </View>
  );
}
