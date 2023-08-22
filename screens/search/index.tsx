import React, { useRef } from "react";
import { ScrollView, StyleSheet, Platform } from "react-native";
import SearchBar from "../../components/common/searchBar";
import Filter from "../../components/screens/search/filter";
import Search_Result from "../../components/screens/search/searchResult";
import FilterSheet from "../../components/screens/search/filter_sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
const Home_Screen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <SafeAreaView style={{ width: "100%", flex: 1 }}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar notification={false} />
        <Filter bottomSheetRef={bottomSheetRef} />
        <Search_Result />
        <FilterSheet bottomSheetRef={bottomSheetRef} />
        <StatusBar style="dark" backgroundColor="white" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
    paddingTop: Platform.OS === "android" ? 40 : 23,
  },
});

export default Home_Screen;
