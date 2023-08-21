import React, { useRef } from "react";
import { ScrollView, StyleSheet } from "react-native";
import SearchBar from "../../components/common/searchBar";
import Filter from "../../components/screens/search/filter";
import Search_Result from "../../components/screens/search/searchResult";
import FilterSheet from "../../components/screens/search/filter_sheet";
import BottomSheet from "@gorhom/bottom-sheet";
const Home_Screen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <SearchBar notification={false} />
      <Filter bottomSheetRef={bottomSheetRef} />
      <Search_Result />
      <FilterSheet bottomSheetRef={bottomSheetRef} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    position: "relative",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    paddingVertical: 23,
  },
});

export default Home_Screen;
