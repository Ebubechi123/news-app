import { Image, Text, TouchableOpacity, View } from "react-native";
import Categories from "../home/catergories_tab";
import { colors } from "../../../theme/colors";
import filterActive from "../../../assets/images/filter_active.png";
import {RefObject} from "react"
interface filterProps {
  bottomSheetRef:RefObject
}
const Filter = (props:filterProps) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingHorizontal: 18,
          marginVertical: 23,
        }}
      >
        <View style={{ width: "25%" }}>
          <TouchableOpacity
          onPress={()=>{
            // console.log("clck",props.bottomSheetRef)
            props.bottomSheetRef?.current?.expand()
          }}
            style={{
              width: "90%",
              backgroundColor: colors.primary_color,
              borderRadius: 30,
              borderWidth: 0,
              paddingVertical: 12,
              paddingHorizontal: 23,
              borderColor: colors.light_grey,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: 6,
            }}
          >
            <Image source={filterActive} style={{ width: 13, height: 15.88 }} />
            <Text
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Filter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "75%" }}>
          <Categories />
        </View>
      </View>
    </>
  );
};

export default Filter;
