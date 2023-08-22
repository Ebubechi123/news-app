import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import Latest_News_Carousel from "./latest_news_carousel";
import LatestNewsLoader from "./latest_news_card_loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../../../state/store";
import { getLatestNews } from "../../../state/slices/get_latest_news";

const Latest_News = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector(({ latest_news }) => latest_news?.loading);
  useEffect(() => {
    dispatch(getLatestNews());
  }, []);
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

        <View style={{ width: "100%", marginTop: 20 }}>
          {loading ? <LatestNewsLoader /> : <Latest_News_Carousel />}
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
    paddingHorizontal: 18,
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
