import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import bgImg from "../../assets/images/latest_news.jpg";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import {formatDate} from "../../utilities/formatDate"
interface newsProp {
  author: string;
 publishedAt: string;
  urlToImage: string;
  title: string;
}
const News_Card = (props: newsProp) => {
  const navigate = useNavigation().navigate;
  const { author, title, urlToImage,publishedAt } = props;
  console.log("date",publishedAt)
  return (
    <>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => {
          navigate("News_Details");
        }}
      >
        <ImageBackground source={{ uri: urlToImage }} style={styles.card}>
          <LinearGradient
            colors={["#62626259", "#000000"]}
            style={styles.gradient}
          />
          <View style={styles.content}>
            <View style={styles.title_container}>
              <Text lineBreakMode="tail" numberOfLines={2} style={styles.title}>
                {title}
              </Text>
            </View>

            <View style={styles.card_details}>
              <Text style={styles.author}>{author}</Text>
              <Text style={styles.date}>{formatDate(publishedAt)}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </>
  );
};

export default News_Card;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 8,
    height: 138,
    marginBottom: 18,
    resizeMode: "cover",
    overflow: "hidden",
  },
  gradient: {
    width: "100%",
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    width: "100%",
    paddingHorizontal: 23,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  title_container: {
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20.8,
  },

  card_details: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  author: {
    fontWeight: "600",
    fontFamily: "Nunito",
    fontSize: 12,
    color: "white",
  },
  date: {
    fontWeight: "600",
    fontFamily: "Nunito",
    fontSize: 12,
    color: "white",
  },
});
