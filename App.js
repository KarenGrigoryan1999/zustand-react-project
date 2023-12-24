import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, StatusBar as SB, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

import Navigation from './src/navigation/tab';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Black': require('./assets/Montserrat-Black.ttf'),
    'Montserrat-Regular': require('./assets/Montserrat-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} >
      <StatusBar style="dark" />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? SB.currentHeight : 0,
    fontFamily: 'Montserrat-Black'
  },
});
