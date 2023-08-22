import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
interface NewsItem {
  id: number;
  title: string;
  author: string;
  description: string;
  urlToImage: string;
}

interface CardProps {
  cardWidth: number;
  newsData: NewsItem;
}
const Latest_News_Card = (props: CardProps) => {
  const { title, author, description, urlToImage } = props.newsData;
  return (
    <TouchableOpacity
      style={{
        width: props.cardWidth,
        left: -10,
        position: "relative",
      }}
    >
      <ImageBackground source={{ uri: urlToImage }} style={styles.card}>
        <LinearGradient
          colors={["#62626259", "#000000"]}
          style={styles.gradient}
        />
        {author && (
          <View style={styles.author_container}>
            <Text style={styles.author}>by {author}</Text>
          </View>
        )}
        <View style={styles.title_container}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details_container}>
          <Text style={styles.details} lineBreakMode="tail" numberOfLines={3}>
            “{description}”
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
    fontSize: 11,
    fontWeight: "800",
  },
  title_container: {
    width: "100%",
    paddingHorizontal: 18,
    marginTop: 4,
  },
  title: {
    fontFamily: "Nunito",
    color: "white",
    lineHeight: 20.8,
    fontSize: 16,
    fontWeight: "700",
  },
  details_container: {
    width: "100%",
    paddingHorizontal: 18,
    position: "absolute",
    bottom: 20,
  },
  details: {
    fontWeight: "400",
    color: "white",
    fontSize: 11,
    lineHeight: 13.64,
  },
});
