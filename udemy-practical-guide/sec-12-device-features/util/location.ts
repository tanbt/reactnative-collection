// https://console.cloud.google.com/google/maps-apis/credentials?project=udemy-reactnative-course
const GOOGLE_API_KEY = "AIzaSyCZ4njMN1XAcSgJSL4zUgjEXFc8akWclzU";

export type Location = { lat: number; lng: number };

export function getMapPreview({ lat, lng }: Location) {
  const url = `https://maps.googleapis.com/maps/api/staticmap?
  center=${lat},${lng}
  &zoom=14
  &size=400x200
  &maptype=roadmap
  &markers=color:red%7Clabel:Y%7C${lat},${lng}
  &key=${GOOGLE_API_KEY}`;

  return url;
}
