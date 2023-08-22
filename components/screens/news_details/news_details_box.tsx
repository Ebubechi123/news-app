import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../theme/colors";

const News_Details = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.date_view}>
          <Text style={styles.date}>Sunday, 9 May 2021</Text>
        </View>
        <View style={styles.title_container}>
          <Text style={styles.title}>
            Crypto investors should be prepared to lose all their money, BOE
            governor says
          </Text>
        </View>
        <View style={styles.author_container}>
          <Text style={styles.author_container}>Published by Ryan Browne</Text>
        </View>
      </View>
    </>
  );
};

export default News_Details;
const styles = StyleSheet.create({
  container: {
    width: 350,
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#f5f5f5d2",
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(10px)",
    elevation: 5,
    top: "40%",
    position: "absolute",
    zIndex: 1,
    backgroundGradient: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: 10,
      zIndex: -1,
      backgroundColor: "transparent",
      opacity: 0.5,
      borderBottomColor: "rgba(255, 255, 255, 0.5)",
      borderBottomWidth: 100,
    },
  },
  date_view: {
    width: "100%",
  },
  date: {
    fontSize: 13,
    color: "#2E0505",
    fontWeight: "600",
    textAlign: "left",
  },
  title_container: {
    width: "100%",
    marginVertical: 12,
  },
  title: {
    color: "#2E0505",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "left",
  },
  author_container: {
    width: "100%",
  },
  author: {
    fontSize: 13,
    color: "#2E0505",
    fontWeight: "600",
    textAlign: "left",
  },
});
