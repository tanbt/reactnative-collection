import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/use-theme';
import { WebView } from 'react-native-webview';

const myHtmlFile = require('../../assets/local-site.html');

const runJSOnWebview = `
      document.body.style.backgroundColor = 'red';
      setTimeout(function() { window.alert('This will run once the page is loaded.') }, 2000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;


export default function ExploreScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
      {/* <WebView style={styles.container} source={{ uri: 'https://expo.dev' }} /> */}
      <WebView style={styles.container} source={myHtmlFile} onMessage={(event) => { }}
        injectedJavaScript={runJSOnWebview} />
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
