import { LatLng } from "react-native-maps";

// !!!IMPORTANT: do not break the URL into multiple line using backtick, it breaks in some cases.

// https://console.cloud.google.com/google/maps-apis/credentials?project=udemy-reactnative-course
const GOOGLE_API_KEY = "AIzaSyCZ4njMN1XAcSgJSL4zUgjEXFc8akWclzU";

export function getMapPreview({ latitude, longitude }: LatLng) {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:Y%7C${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

  return url;
}

export async function getAddress({ latitude, longitude }: LatLng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to get the address!");
  }

  const data = await response.json();
  return (<any>data).results[0].formatted_address;
}
