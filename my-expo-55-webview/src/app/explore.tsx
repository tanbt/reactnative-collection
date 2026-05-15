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

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    webViewRef.current?.injectJavaScript(`
      try {
        const rnName = ${JSON.stringify(name)};
        // alert(${JSON.stringify(`Hello from ${name}!`)});
        window.localStorage.setItem('rnName', rnName);
        const localStorageContent = document.getElementById('local-storage-content');
        if (localStorageContent) {
          localStorageContent.textContent = rnName;
        }
      } catch (error) {
        console.error('injectJavaScript failed:', error);
      }
      true;
    `);
  }, [isLoaded, name]);

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
        onMessage={(event) => {
          alert(`This is a app native message. The app received event from WebView: ${event.nativeEvent.data}`);
        }}
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
