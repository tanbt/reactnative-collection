import { StyleSheet, Text, TextInputProps, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { GlobalStyles } from "../../constants/styles";

interface Props {
  label: string;
  isValid: boolean;
  textInputConfig?: TextInputProps;
  style?: any;
}

export function Input({ label, isValid, textInputConfig, style = {} }: Props) {
  const isMultiline = textInputConfig && textInputConfig.multiline;

  return (
    <View style={[s.container, style]}>
      <Text style={[s.label, !isValid && s.labelInvalid]}>{label}</Text>
      <TextInput
        style={[
          s.input,
          isMultiline && s.inputMultiline,
          !isValid && s.labelInvalid,
        ]}
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
  labelInvalid: {
    color: GlobalStyles.colors.error500,
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
