import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';

export default function DataScreen({navigation} : {navigation: StackNavigationHelpers}) {
  return (
    <View>
      <Text>Hello from Data Screen.</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Home</Text>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}