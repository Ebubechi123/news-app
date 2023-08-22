import React, { useEffect } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import Notification_Header from "../../components/screens/notification/header";
import Notification_Card from "../../components/screens/notification/notification_card";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../state/slices/get_news";
import { AppDispatch } from "../../state/store";
import NewsLoader from "../../components/screens/home/news_card_loader";

const Notification_Screen: React.FC = () => {
  const { loading, data } = useSelector(({ news }) => news);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Notification_Header />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.list_view}
        >
          {loading
            ? Array.from({ length: 6 }).map((index) => (
                <NewsLoader key={index} />
              ))
            : data.map(({ author, title, urlToImage, publishedAt,content }, index) => (
                <Notification_Card
                  key={index}
                  author={author}
                  title={title}
                  content={content}
                  publishedAt={publishedAt}
                  urlToImage={urlToImage}
                />
              ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Notification_Screen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: Platform.OS === "android" ? 40 : 20,
  },
  list_view: {
    width: "100%",
    paddingHorizontal: 23,
    marginTop: 23,
  },
});
