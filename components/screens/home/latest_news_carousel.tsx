import { Dimensions} from "react-native";
import Latest_News_Card from "./latest_news_card";
import Carousel from "react-native-snap-carousel";

const Latest_News_Carousel = () => {
  const cardWidth = Dimensions.get("window").width-60;
  const sliderWidth = Dimensions.get("window").width;
  const newsData = [
    {
      id: 1,
      title:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      description:
        "“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”",
    },
    {
      id: 2,
      title:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      description:
        "“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”",
    },
    {
      id: 3,
      title:
        "Crypto investors should be prepared to lose all their money, BOE governor says",
      description:
        "“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”",
    },
  ];

  return (
    <Carousel
      data={newsData}
      renderItem={({index}) => (
        <Latest_News_Card cardWidth={cardWidth} newsData={newsData} />
      )}
      sliderWidth={sliderWidth}
      itemWidth={cardWidth}
      inactiveSlideShift={0} 
      layout="default"
    />
  );
};

export default Latest_News_Carousel;
