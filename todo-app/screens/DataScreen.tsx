import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export default function DataScreen() {
  return (
    <View>
      <Text>Hello from Data Screen.</Text>
      <TouchableOpacity onPress={() => {console.log("touch")}}>
        <Text>Go Home</Text>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}