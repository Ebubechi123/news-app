import { View } from "react-native";
import News_Card from "../../common/news_card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNews } from "../../../state/slices/get_news";
import { AppDispatch } from "../../../state/store";
import NewsLoader from "./news_card_loader";
interface newsListProps {
  styles: object;
}
const News_List = ({ styles }: newsListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, data } = useSelector(({ news }) => news);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  return (
    <>
      <View
        style={
          styles ? styles : { width: "100%", padding: 10, marginVertical: 10 }
        }
      >
        {loading
          ? Array.from({ length: 6 }).map((index) => <NewsLoader key={index} />)
          : data.map(({ author, title, urlToImage, publishedAt }, index) => (
              <News_Card
                key={index}
                author={author}
                title={title}
                publishedAt={publishedAt}
                urlToImage={urlToImage}
              />
            ))}
      </View>
    </>
  );
};

export default News_List;
