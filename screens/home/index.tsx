import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../../components/common/searchBar";

const Home_Screen = () => {
  return (
    <View style={styles.container}>
        <SearchBar/>
    </View>
  );
};

export default Home_Screen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 23,
  },
});
