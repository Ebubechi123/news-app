import { FlatList } from "react-native";
import News_Card from "../../common/news_card";

const News_List = () => {
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ width: "100%",padding:10,marginVertical:10}}
        data={[0, 1, 2, 3]}
        renderItem={() => <News_Card />}
      />
    </>
  );
};

export default News_List;
