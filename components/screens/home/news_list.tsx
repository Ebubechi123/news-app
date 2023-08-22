import {  View } from "react-native";
import News_Card from "../../common/news_card";
interface newsListProps {
  styles: object;
}
const News_List = ({ styles }: newsListProps) => {
  return (
    <>
      <View
        style={
          styles ? styles : { width: "100%", padding: 10, marginVertical: 10 }
        }
      >
        {[0, 1, 2, 3].map((index) => (
          <News_Card key={index} />
        ))}
      </View>
    </>
  );
};

export default News_List;
