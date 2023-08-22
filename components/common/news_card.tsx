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
const News_Card = () => {
  const navigate = useNavigation().navigate;
  return (
    <>
      <TouchableOpacity
        style={{ width: "100%" }}
        onPress={() => {
          navigate("News_Details");
        }}
      >
        <ImageBackground source={bgImg} style={styles.card}>
          <LinearGradient
            colors={["#62626259", "#000000"]}
            style={styles.gradient}
          />
          <View style={styles.content}>
            <View style={styles.title_container}>
              <Text style={styles.title}>
                5 things to know about the 'conundrum' of lupus
              </Text>
            </View>

            <View style={styles.card_details}>
              <Text style={styles.author}>Matt Villano</Text>
              <Text style={styles.date}>Sunday, 9 May 2021</Text>
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
