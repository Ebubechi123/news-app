import { Platform, SafeAreaView, StyleSheet, } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigation/stackNavigator";
const platform = Platform.OS;
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito: require("./assets/fonts/Nunito/static/Nunito-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <AppStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: platform === "ios" ? 40 : 0,
  },
});
