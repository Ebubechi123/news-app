import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/common/searchBar";
import Latest_News from "../../components/screens/home/latest_news";
import Categories from "../../components/screens/home/catergories_tab";
import News_List  from "../../components/screens/home/news_list"
const Home_Screen = () => {
  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <Latest_News />
      <Categories />
      <News_List />
    </ScrollView>
  );
};

export default Home_Screen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: 23,
  },
});
