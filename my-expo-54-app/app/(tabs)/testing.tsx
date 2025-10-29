import CoinIcon from "@/assets/icons/coin-01.svg";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ActivityIndicator, Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle, Path } from "react-native-svg";

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
  console.log("Status Code:", response.status);
  console.log("Status Text:", response.statusText);
  console.log("Content-Type:", response.headers["content-type"]);
  console.log("Response Data Length:", response.data.length, "characters");
  console.log("First 200 characters:", response.data.substring(0, 200));
  
  return response.data;
};

export default function TestingScreen() {
  // Use React Query's useQuery hook
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['googlePage'],
    queryFn: fetchGooglePage,
    retry: 2,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Log errors if they occur
  if (isError) {
    console.error("❌ Request failed:", error);
    if (axios.isAxiosError(error)) {
      console.error("Error message:", error.message);
      console.error("Error code:", error.code);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#00aaaa" }}>
      <ThemedView style={{ padding: 20 }}>
        <CoinIcon width={20} height={20} />
        <ThemedText style={{ marginVertical: 10 }}>
          This is the testing screen.
        </ThemedText>
        <EyeIcon visible={true} strokeColor="blue" />

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

          <ThemedText style={{ marginTop: 15, fontSize: 12, opacity: 0.7 }}>
            Check the console/logs for detailed output
          </ThemedText>

          <ThemedText style={{ marginTop: 10, fontSize: 11, opacity: 0.6 }}>
            React Query handles caching, refetching, and state management automatically!
          </ThemedText>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}
