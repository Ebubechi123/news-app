import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import image from "../../../assets/images/latest_news.jpg";
import { colors } from "../../../theme/colors";
interface NewsItem {
  id: number;
  title: string;
  description: string;
}

interface CardProps {
  cardWidth: number;
  newsData: NewsItem[];
}
const Latest_News_Card = (props: CardProps) => {
  return (
    <TouchableOpacity
      style={{
        width: props.cardWidth,
        left:-10,
        position:"relative"
      }}
    >
      <ImageBackground source={image} style={styles.card}>
        <LinearGradient
          colors={["#62626259", "#000000"]}
          style={styles.gradient}
        />
        <View style={styles.author_container}>
          <Text style={styles.author}>by Ryan Brown</Text>
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title}>
            Crypto investors should be prepared to lose all their money, BOE
            governor says
          </Text>
        </View>
        <View style={styles.details_container}>
          <Text style={styles.details}>
            “I’m going to say this very bluntly again,” he added. “Buy them only
            if you’re prepared to lose all your money.”
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Latest_News_Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 240,
    paddingTop: 80,
    paddingBottom: 18,
    borderRadius: 8,
    overflow: "hidden",
  },
  gradient: {
    width: "100%",
    ...StyleSheet.absoluteFillObject,
  },
  author_container: {
    width: "100%",
    paddingHorizontal: 18,
    marginTop: 8,
  },
  author: {
    color: "white",
    textAlign: "left",
    // fontFamily: "Nunito",
    fontSize: 14,
    fontWeight: "800",
  },
  title_container: {
    width: "100%",
    paddingHorizontal: 18,
    marginTop: 4,
  },
  title: {
    // fontFamily: "Nunito",
    color: "white",
    lineHeight: 20.8,
    fontWeight: "700",
  },
  details_container: {
    width: "100%",
    paddingHorizontal: 18,
    position: "absolute",
    bottom: 20,
  },
  details: {
    // fontFamily: "Nunito",
    fontWeight: "400",
    color: "white",
    fontSize: 12,
    lineHeight: 13.64,
  },
});
