import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const NewsLoader = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#f0f0f0", "#e0e0e0", "#f0f0f0"]}
        style={styles.gradient}
      >
        <Text style={styles.title}></Text>
        <Text style={styles.description}></Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 3,
    height: 138,
  },
  gradient: {
    height: "100%",
    borderRadius: 8,
    padding: 16,
  },
  title: {
    width: "70%",
    height: 24,
    marginBottom: 8,
  },
  description: {
    width: "100%",
    height: 16,
  },
});

export default NewsLoader;
