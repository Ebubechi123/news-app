import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import ManImage from "../../assets/images/man.png";
import likeIcon from "../../assets/images/hearts.png";
import { SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import News from "../../components/screens/news_details/news";
import News_Details_Box from "../../components/screens/news_details/news_details_box";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React from "react";
const News_Details_Screen: React.FC = () => {
  const goBack = useNavigation().goBack;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.image_container}>
          <LinearGradient
            colors={["#62626259", "#000000"]}
            start={{ x: 0, y: 0 }}
            style={styles.gradient}
          >
            <Image
              source={ManImage}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            />
          </LinearGradient>

          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
            style={styles.icon_container}
          >
            <SimpleLineIcons color={"#173418"} size={16} name="arrow-left" />
          </TouchableOpacity>
        </View>
        <News_Details_Box />
        <News />
        <TouchableOpacity>
          <LinearGradient
            colors={["#FF3A44", "#FF8086"]}
            style={styles.like_container}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 1, y: 1 }}
          >
            <Image source={likeIcon} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <StatusBar style="light" backgroundColor="transparent" />
    </>
  );
};

export default News_Details_Screen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  image_container: {
    width: "100%",
    flex: 1.4,
    position: "relative",
  },
  icon_container: {
    position: "absolute",
    backgroundColor: "#adaaaabd",
    top: 80,
    left: 35,
    padding: 9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  gradient: {
    width: "100%",
    ...StyleSheet.absoluteFillObject,
  },
  like_container: {
    position: "absolute",
    borderRadius: 50,
    width: 60,
    height: 60,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    bottom: 80,
    right: 20,
    zIndex: 1,
  },
});
