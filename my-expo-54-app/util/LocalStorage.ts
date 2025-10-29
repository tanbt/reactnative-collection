import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultExpirationMs = 31 * 24 * 60 * 60 * 1000; // 31 days
// const defaultExpirationMs = 5 * 60 * 1000; // 2m test

export async function getLocalData<T>(key: string): Promise<T | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (!jsonValue) return null;
    const obj: any = JSON.parse(jsonValue);
    if (obj.expiredAt < Date.now()) return null;
    delete obj.expiredAt;
    return obj;
  } catch (e) {
    throw e;
  }
}
export async function storeLocalData<T>(
  key: string,
  value: T,
  ttl = defaultExpirationMs
) {
  try {
    const timedObj = Object.assign(
      {},
      { ...value },
      { expiredAt: Date.now() + ttl }
    );
    const jsonValue = JSON.stringify(timedObj);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw e;
  }
}
/**
 * Will show error `Failed to delete storage directory.Error Domain=NSCocoaErrorDomain`
 * if local storage isn't in used.
 */
export const clearLocalData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.warn("AsyncStorage isn't in used.");
  }
  console.log("Done.");
};
