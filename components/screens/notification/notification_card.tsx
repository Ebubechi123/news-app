import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import img from "../../../assets/images/latest_news.jpg";
import { colors } from "../../../theme/colors";
import { useState } from "react";
import { formatDate } from "../../../utilities/formatDate";
interface newsProp {
  author: string;
  publishedAt: string;
  urlToImage: string;
  title: string;
  content: string;
}
const Notification_Card = (props: newsProp) => {
  const [expanded, setExpanded] = useState(false);
  const { author, publishedAt, urlToImage, title, content } = props;
  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <View style={styles.card}>
        <View style={styles.image_view}>
          <Image style={styles.image} source={{ uri: urlToImage }} />
        </View>
        <View style={styles.date_view}>
          <Text style={styles.date}>{formatDate(publishedAt)}</Text>
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.description_view}>
          <Text
            style={styles.description}
            lineBreakMode="tail"
            numberOfLines={expanded ? null : 2}
          >
            {content}
          </Text>
          <Text onPress={toggleDescription} style={styles.readMoreLink}>
            {expanded ? "Read less" : "Read more"}
          </Text>
        </View>
        <View style={styles.author_container}>
          <Text style={styles.author}>Published by {author}</Text>
        </View>
      </View>
    </>
  );
};

export default Notification_Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginBottom: 40,
  },
  image_view: {
    width: "100%",
    height: 128,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    resizeMode: "cover",
    borderRadius: 15,
  },
  date_view: {
    width: "100%",
    marginVertical: 12,
  },
  date: {
    fontSize: 13,
    color: "#2E0505",
    fontWeight: "400",
    textAlign: "left",
  },
  title_container: {
    width: "100%",
    marginBottom: 12,
  },
  title: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20.8,
    textAlign: "left",
  },
  description_view: {
    width: "100%",
    marginBottom: 12,
  },
  description: {
    fontWeight: "400",
    color: colors.black,
    fontSize: 14,
    textAlign: "left",
    lineHeight: 21,
  },
  author_container: {
    width: "100%",
  },
  author: {
    fontSize: 13,
    color: "#2E0505",
    fontWeight: "600",
    textAlign: "left",
  },
  readMoreLink: {
    color: colors.secondary_color,
    fontWeight: "600",
    textAlign: "left",
    marginLeft: 4, // Add margin to separate "Read more" from description
  },
});
