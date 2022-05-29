import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  ImageInfo,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/Colors";

export function ImagePicker() {
  const [pickedImage, setPickedImage] = useState<string>();
  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();

  async function verifyPermission(): Promise<boolean> {
    if (cameraPermissionStatus?.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionStatus?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Missing permissions",
        "Please grant camera permission to continue."
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPerm = await verifyPermission();
    if (!hasPerm) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage((image as ImageInfo).uri);
  }

  return (
    <View>
      <View style={s.imagePreview}>
        {!pickedImage && <Text>No image taken yet.</Text>}
        {pickedImage && <Image style={s.image} source={{ uri: pickedImage }} />}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

const s = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
