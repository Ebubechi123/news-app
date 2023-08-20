import { FlatList, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../theme/colors";

const Categories = () => {
  const list = [
    {
      id: 1,
      catergory: "Health",
    },
    {
      id: 2,
      catergory: "Technology",
    },
    {
      id: 3,
      catergory: "Finance",
    },
    {
      id: 4,
      catergory: "Arts",
    },
    {
      id: 5,
      catergory: "Sports",
    },
    {
      id: 6,
      catergory: "Fashion",
    },
  ];
  return (
    <>
      <FlatList
      style={{width:"100%",}}
      contentContainerStyle={{justifyContent:"space-evenly",alignItems:"center",gap:13,paddingLeft:18}}
        data={list}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                backgroundColor: item.id === 1 ? colors.primary_color : "white",
                borderRadius: 30,
                borderWidth: item.id === 1  ? 0 : 1,
                paddingVertical:12,
                paddingHorizontal:23,
                borderColor: item.id === 1 ? "none" : colors.light_grey,
              }}
              key={item.id}
            >
              <Text
                style={{
                  color: item.id === 1 ? "white" : colors.black,
                  textAlign: "center",
                }}
              >
                {item.catergory}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default Categories;
