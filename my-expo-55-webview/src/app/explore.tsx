import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/use-theme';
import { WebView } from 'react-native-webview';

const myHtmlFile = require('../../assets/local-site.html');


export default function ExploreScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.root, { backgroundColor: theme.background }]}>
      {/* <WebView style={styles.container} source={{ uri: 'https://expo.dev' }} /> */}
      <WebView style={styles.container} source={myHtmlFile}  />
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
