import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import notificationIcon from "../../assets/images/notificationIcon.png";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

interface searchBarProps {
  notification: boolean;
}

const SearchBar = (props: searchBarProps) => {
  const navigate = useNavigation().navigate;
  const [input, setInput] = useState("");
  return (
    <>
      <View style={styles.search_bar_container}>
        <View
          style={[
            styles.search_bar,
            { width: props.notification ? "85%" : "100%" },
          ]}
        >
          <TextInput
            value={input}
            onChangeText={(e) => {
              setInput(e);
            }}
            style={styles.search_input}
            placeholder="DodgeCoin to the Moon.."
            placeholderTextColor={colors.grey}
          />
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => {
                input !== "" ? setInput("") : navigate("Search");
              }}
            >
              {input !== "" ? (
                <Feather name="x" color={colors.grey} size={20} />
              ) : (
                <Feather name="search" color={colors.grey} size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {props.notification && (
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => {
                navigate("Notification");
              }}
            >
              <LinearGradient
                colors={["#FF3A44", "#FF8086"]}
                style={styles.notification_container}
                start={{ x: 0, y: 0.2 }}
                end={{ x: 1, y: 1 }}
              >
                <Image
                  source={notificationIcon}
                  style={styles.notificationIcon}
                  resizeMode="contain"
                />
                <View style={styles.indicator} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  search_bar_container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "auto",
    paddingHorizontal: 18,
  },
  search_bar: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: colors.light_grey,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  search_input: {
    width: "85%",
    padding: 3,
    color: "black",
  },
  icon: {
    width: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  notification_container: {
    width: 45,
    height: 45,
    borderRadius: 50,
    padding: 5,
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
  },
  notificationIcon: {
    width: 23,
    height: 23,
  },
  indicator: {
    position: "absolute",
    width: 10,
    height: 10,
    borderRadius: 50,
    top: 8,
    right: 13,
    zIndex: 1,
    backgroundColor: colors.tertiary_color,
  },
});
