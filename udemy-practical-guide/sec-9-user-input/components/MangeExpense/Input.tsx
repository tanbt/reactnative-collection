import { StyleSheet, Text, TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  label: string;
  style?: any;
  textInputConfig?: TextInputProps;
}

export function Input({ label, style = {}, textInputConfig }: Props) {
  const isMultiline = textInputConfig && textInputConfig.multiline;

  return (
    <View style={[s.container, style]}>
      <Text style={s.label}>{label}</Text>
      <TextInput
        style={[s.input, isMultiline ? s.inputMultiline : null]}
        {...textInputConfig}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary800,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top", // recommended style
  },
});
