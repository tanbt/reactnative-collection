import CoinIcon from "@/assets/icons/coin-01.svg";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { isVietnamese } from "@/util/locales";
import { useDefaultTranslation } from "@/util/locales/hook";
import { en } from "@/util/locales/translate/en";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import i18n from "i18next";
import { useEffect, useState } from "react";
import { ActivityIndicator, Button, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path } from "react-native-svg";
import { WebView } from "react-native-webview";

const EyeIcon = ({
  visible,
  strokeColor,
}: {
  visible: boolean;
  strokeColor: string;
}) => (
  <View style={{ padding: 10 }}>
    {visible ? (
      <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <Path
          d="M10 4C5 4 1.73 7.11 1 10c.73 2.89 4 6 9 6s8.27-3.11 9-6c-.73-2.89-4-6-9-6z"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <Circle cx="10" cy="10" r="3" stroke={strokeColor} strokeWidth="1.5" />
      </Svg>
    ) : (
      <Svg width="24" height="24" viewBox="0 0 20 20" fill="none">
        <Path d="M1 1l18 18" stroke={strokeColor} strokeWidth="1.5" />
        <Path
          d="M10 4C5 4 1.73 7.11 1 10c.73 2.89 4 6 9 6 1.61 0 3.09-.31 4.39-.86M17.94 13.06C18.62 12.13 19.13 11.11 19 10c-.73-2.89-4-6-9-6-.98 0-1.92.09-2.81.26"
          stroke={strokeColor}
          strokeWidth="1.5"
        />
        <Circle cx="10" cy="10" r="3" stroke={strokeColor} strokeWidth="1.5" />
      </Svg>
    )}
  </View>
);

// Fetch function for React Query
const fetchGooglePage = async () => {
  console.log("Starting request to google.com...");

  const response = await axios.get("https://www.google.com");

  // Log various properties
  console.log("✅ Request successful!");
  // console.log("Status Code:", response.status);
  // console.log("Status Text:", response.statusText);
  // console.log("Content-Type:", response.headers["content-type"]);
  // console.log("Response Data Length:", response.data.length, "characters");
  // console.log("First 200 characters:", response.data.substring(0, 200));

  return response.data;
};

export default function TestingScreen() {
  const t = useDefaultTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [text, setText] = useState("some text");

  // Use React Query's useQuery hook
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["googlePage"],
    queryFn: fetchGooglePage,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  useEffect(() => {
    const storeLanguage = async () => {
      await AsyncStorage.setItem("language", "en");
    };
    storeLanguage();

    console.log("Is system language Vietnamese?", isVietnamese());
  }, []);

  // Log errors if they occur
  if (isError) {
    console.error("❌ Request failed:", error);
    if (axios.isAxiosError(error)) {
      console.error("Error message:", error.message);
      console.error("Error code:", error.code);
    }
  }

  const chooseLang = async (lang: any) => {
    setSelectedLanguage(lang);
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00aaaa" }}>
      <ThemedView style={{ padding: 20 }}>
        <CoinIcon width={20} height={20} />
        <ThemedText style={{ marginVertical: 10 }}>
          This is the testing screen. {t(en.home)}
        </ThemedText>
        <EyeIcon visible={true} strokeColor="blue" />

        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />

        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => chooseLang(itemValue)}
        >
          <Picker.Item label="English" value="en" />
          <Picker.Item label="Vietnamese" value="vi" />
        </Picker>

        <KeyboardAwareScrollView
          style={{ backgroundColor: "#aaaa00" }}
          extraScrollHeight={20}
          enableOnAndroid={true}
          keyboardShouldPersistTaps="handled"
        >
          <TextInput
            label="Email"
            value={text}
            onChangeText={(text) => setText(text)}
          />
        </KeyboardAwareScrollView>

        <View style={{ marginTop: 20 }}>
          <ThemedText style={{ fontWeight: "bold", marginBottom: 10 }}>
            React Query + Axios Request Example:
          </ThemedText>

          {(isLoading || isFetching) && (
            <ActivityIndicator size="large" color="#0000ff" />
          )}

          {isError && (
            <ThemedText style={{ marginVertical: 10, color: "red" }}>
              Error: {error instanceof Error ? error.message : "Unknown error"}
            </ThemedText>
          )}

          {data && !isError && (
            <ThemedText style={{ marginVertical: 10, color: "green" }}>
              ✅ Success! Data length: {data.length} characters
            </ThemedText>
          )}

          <Button
            title={isFetching ? "Fetching..." : "Refetch Google.com"}
            onPress={() => refetch()}
            disabled={isFetching}
          />

          <ThemedText style={{ marginTop: 10, fontSize: 11, opacity: 0.6 }}>
            React Query handles caching, refetching, and state management
            automatically!
          </ThemedText>
        </View>
        <View
          style={{
            width: 400,
            height: 500,
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <WebView
            source={{ uri: "https://reactnative.dev/" }}
            style={{ width: "100%", height: 500, marginTop: 20 }}
          />
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}
