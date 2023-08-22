import { Dimensions } from "react-native";
import Latest_News_Card from "./latest_news_card";
import Carousel from "react-native-snap-carousel";
import { useSelector } from "react-redux";

const Latest_News_Carousel = () => {
  const data = useSelector(({ latest_news }) => latest_news?.data);
  const cardWidth = Dimensions.get("window").width - 60;
  const sliderWidth = Dimensions.get("window").width;

  return (
    <Carousel
      data={data}
      renderItem={({ index, item }) => (
        <Latest_News_Card cardWidth={cardWidth} newsData={item} />
      )}
      sliderWidth={sliderWidth}
      itemWidth={cardWidth}
      inactiveSlideShift={0}
      layout="default"
    />
  );
};

export default Latest_News_Carousel;
