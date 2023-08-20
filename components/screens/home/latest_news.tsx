import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import Latest_News_Carousel from "./latest_news_carousel";

const Latest_News = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Latest News</Text>
          </View>
          <View style={styles.see_all_container}>
            <TouchableOpacity
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 12,
              }}
            >
              <Text style={styles.see_all}>See All</Text>
              <Ionicons
                name="arrow-forward"
                size={18}
                color={colors.secondary_color}
              />
            </TouchableOpacity>
          </View>
        </View>
      


      <View style={{width:"100%",marginTop:20}} > 
        {/* <Latest_News_Card/> */}
        <Latest_News_Carousel/>
      </View>


      </View>
    </>
  );
};

export default Latest_News;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 30,
    marginBottom: 40,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal:18
  },
  title_container: {
    width: "50%",
  },
  title: {
    color: colors.black,
    fontWeight: "800",
    fontSize: 20,
    textAlign: "left",
    fontFamily: "Nunito",
  },
  see_all_container: {
    width: "50%",
  },
  see_all: {
    color: colors.secondary_color,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Nunito",
  },
});
