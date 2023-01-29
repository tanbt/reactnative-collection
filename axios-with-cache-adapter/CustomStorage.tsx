import AsyncStorage from "@react-native-async-storage/async-storage";
import { AxiosStorage, buildStorage } from "axios-cache-interceptor";
import { getLocalData, storeLocalData } from "./CustomLocalStorage";

// // Basic example
// export const customStorage: AxiosStorage = buildStorage({
//   find: async (key: string): Promise<any> => {
//     const data = await AsyncStorage.getItem(key);
//     return data ? JSON.parse(data) : null;
//   },
//   set: (key: string, value: any) => {
//     const jsonValue = JSON.stringify(value);
//     return AsyncStorage.setItem(key, jsonValue);
//   },
//   remove: (key: string) => AsyncStorage.removeItem(key),
// });

export const customStorage: AxiosStorage = buildStorage({
  find: (key: string): Promise<any> => getLocalData(key),
  set: (key: string, value: any) => storeLocalData(key, value, 1 * 60 * 1000),
  remove: (key: string) => AsyncStorage.removeItem(key),
});
