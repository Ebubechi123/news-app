import React, { useCallback } from "react";
import { Dimensions, Platform, SafeAreaView, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigation/stackNavigator";
import 'react-native-gesture-handler'
import {Provider} from "react-redux"
import {store} from "./state/store"
const screenWidth = Dimensions.get("window").width;
SplashScreen.preventAutoHideAsync();




export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito: require("./assets/fonts/Nunito/static/Nunito-Light.ttf"),
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
   <Provider store={store} >
     <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <AppStack />
      </View>
    </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    // paddingTop: platform === "ios" ? 40 : 0,
  },
});
