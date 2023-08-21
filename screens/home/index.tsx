import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/common/searchBar";
import Latest_News from "../../components/screens/home/latest_news";
import Categories from "../../components/screens/home/catergories_tab";
import News_List from "../../components/screens/home/news_list";
import Bottom_Tab from "../../components/screens/home/bottom_tab";

const Home_Screen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar notification />
        <Latest_News />
        <Categories />
        <News_List
          styles={{ width: "100%", padding: 10, marginVertical: 10 }}
        />
      </ScrollView>
      <Bottom_Tab />
    </View>
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
