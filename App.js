import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, StatusBar as SB, SafeAreaView } from 'react-native';

import Navigation from './src/navigation/tab';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? SB.currentHeight : 0,
  },
});
