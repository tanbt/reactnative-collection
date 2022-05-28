import { Text, TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface Props {
  label: string;
  textInputConfig?: TextInputProps;
}

export function Input({ label, textInputConfig }: Props) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}
