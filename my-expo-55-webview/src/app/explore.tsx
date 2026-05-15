import { useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/use-theme';
import { WebView } from 'react-native-webview';

const myHtmlFile = require('../../assets/local-site.html');

export default function ExploreScreen() {
  const theme = useTheme();
  const { name } = useLocalSearchParams<{ name?: string; }>();
  const webViewRef = useRef<WebView>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const trimmedName = typeof name === 'string' ? name.trim() : '';

  useEffect(() => {
    if (!isLoaded || !trimmedName) {
      return;
    }

    webViewRef.current?.injectJavaScript(`
      window.localStorage.setItem('rnName', ${JSON.stringify(trimmedName)});
      const localStorageContent = document.getElementById('local-storage-content');
      if (localStorageContent) {
        localStorageContent.textContent = ${JSON.stringify(trimmedName)};
      }
      true;
    `);
  }, [isLoaded, trimmedName]);

  const handleLoadEnd = () => {
    setIsLoaded(true);
  };

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
      <WebView
        ref={webViewRef}
        style={styles.container}
        domStorageEnabled
        source={myHtmlFile}
        onLoadEnd={handleLoadEnd}
        onMessage={() => { }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
