import { Alert, Linking, Platform } from 'react-native';
import { PermissionsAndroid, Permission } from 'react-native';

// Location permission types
export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  altitude?: number;
  heading?: number;
  speed?: number;
  timestamp?: number;
}

export interface LocationPermissionResult {
  granted: boolean;
  location?: LocationData;
  error?: string;
}

// Request location permission for Android
const requestLocationPermissionAndroid = async (): Promise<boolean> => {
  try {
  const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
        title: 'Location Permission',
        message: 'This app needs access to your location to provide better services.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      }
    );
    
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  } catch (err) {
    console.warn('Location permission error:', err);
    return false;
  }
};

// Check if location permission is granted
export const checkLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    return granted;
  } else {
    // For iOS, we'll assume permission is granted if we can get location
    // In a real app, you might want to use a more sophisticated check
    return true;
  }
};

// Request location permission
export const requestLocationPermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    return await requestLocationPermissionAndroid();
  } else {
    // For iOS, permission is requested automatically when we try to get location
    return true;
  }
};

// Get current location using navigator.geolocation (built-in)
export const getCurrentLocation = (): Promise<LocationPermissionResult> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        granted: false,
        error: 'Geolocation is not supported by this browser/device'
      });
      return;
    }

    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 10000
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy || undefined,
          altitude: position.coords.altitude || undefined,
          heading: position.coords.heading || undefined,
          speed: position.coords.speed || undefined,
          timestamp: position.timestamp
        };
        
        resolve({
          granted: true,
          location: locationData
        });
      },
      (error) => {
          let errorMessage = 'Unknown error occurred';
          
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = 'Location permission denied by user';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Location information is unavailable';
              break;
            case error.TIMEOUT:
              errorMessage = 'Location request timed out';
              break;
          }
        
        resolve({
          granted: false,
          error: errorMessage
        });
      },
      options
    );
  });
};

// Request location permission and get location
export const requestLocationPermissionAndGetLocation = async (): Promise<LocationPermissionResult> => {
  try {
    // First check if permission is already granted
    const hasPermission = await checkLocationPermission();
    
    if (!hasPermission) {
      // Request permission
      const permissionGranted = await requestLocationPermission();
      
      if (!permissionGranted) {
        return {
          granted: false,
          error: 'Location permission denied by user'
        };
      }
    }

    // Get location
    const result = await getCurrentLocation();
    return result;
    
  } catch (error) {
    return {
      granted: false,
      error: 'Failed to get location'
    };
  }
};

// Show location permission dialog
export const showLocationPermissionDialog = (): Promise<LocationPermissionResult> => {
  // For web browser, use navigator.geolocation directly
  if (Platform.OS === 'web') {
    return new Promise((resolve) => {
      if (!navigator.geolocation) {
        resolve({ granted: false, error: "Geolocation is not supported by this browser" });
        return;
      }
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            granted: true,
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy || undefined,
              altitude: position.coords.altitude || undefined,
              heading: position.coords.heading || undefined,
              speed: position.coords.speed || undefined,
              timestamp: position.timestamp,
            }
          });
        },
        (error) => {
          resolve({ granted: false, error: error.message });
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  }
  
  // For mobile platforms, show native alert
  return new Promise((resolve) => {
    Alert.alert(
      'Location Permission',
      'This app would like to access your location to provide better services. Would you like to allow location access?',
      [
        {
          text: 'Not Now',
          style: 'cancel',
          onPress: () => resolve({
            granted: false,
            error: 'User declined location permission'
          })
        },
        {
          text: 'Allow',
          onPress: async () => {
            const result = await requestLocationPermissionAndGetLocation();
            resolve(result);
          }
        }
      ]
    );
  });
};

// Open app settings for location permission
export const openLocationSettings = () => {
  if (Platform.OS === 'ios') {
    Linking.openURL('app-settings:');
  } else {
    Linking.openSettings();
  }
};
