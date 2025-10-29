import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { useAuthContext } from "../../context/ctx";
import useColorScheme from "../../hooks/useColorScheme";
import { Colors } from "../constants/color";

const LanguageSwitcher = () => {
  const ctx = useAuthContext();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: Colors[colorScheme].text, marginBottom: 8 }}>
        Change language:
      </Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="EN" 
          onPress={() => ctx.setLanguage("en")} 
          color={Colors[colorScheme].tabIconSelected}
        />
        <Button 
          title="VI" 
          onPress={() => ctx.setLanguage("vi")} 
          color={Colors[colorScheme].tabIconSelected}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  }
});

export default LanguageSwitcher;
