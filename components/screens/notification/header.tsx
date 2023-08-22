import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../theme/colors";

const Notification_Header = () => {
  return (
    <>
      <View style={styles.header} >
        <View style={styles.icon_view} >
          <SimpleLineIcons color={"#173418"} size={16} name="arrow-left" />
        </View>
        <View style={styles.title_view} >
          <Text style={styles.title} >Hot Updates</Text>
        </View>
      </View>
    </>
  );
};

export default Notification_Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height:60,
    paddingHorizontal:23,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon_view: {
    width: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title_view: {
    width: "90%",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign:"center",
    color: colors.primary_color,
  },
});
