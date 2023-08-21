import React, { useCallback } from "react";
import { Dimensions, Platform, SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigation/stackNavigator";
import 'react-native-gesture-handler'
const platform = Platform.OS;
const screenWidth = Dimensions.get("window").width;
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito: require("./assets/fonts/Nunito/static/Nunito-Black.ttf"),
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
    width: screenWidth,
    // paddingTop: platform === "ios" ? 40 : 0,
  },
});
