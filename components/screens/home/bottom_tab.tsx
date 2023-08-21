import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../theme/colors";
import homeIcon from "../../../assets/images/home.png";
import home_activeIcon from "../../../assets/images/home_active.png";
import favouritesIcon from "../../../assets/images/favourites.png";
import favourites_activeIcon from "../../../assets/images/favourites_active.png";
import profileIcon from "../../../assets/images/profile.png";
import profile_activeIcon from "../../../assets/images/profile_active.png";
import { useState } from "react";
const list = [
  {
    name: "Home",
    active: true,
    img1: homeIcon,
    img2: home_activeIcon,
  },
  {
    name: "Favourite",
    active: false,
    img1: favouritesIcon,
    img2: favourites_activeIcon,
  },
  {
    name: "Profile",
    active: false,
    img1: profileIcon,
    img2: profile_activeIcon,
  },
];
const Bottom_Tab = () => {
    const [activeTab, setActiveTab] = useState(0); 
  return (
    <>
      <View style={styles.tab}>
        <View
          style={{
            marginBottom: 10,
            width: 50,
            alignSelf: "center",
            backgroundColor: colors.light_grey,
            borderRadius: 5,
            height: 6,
          }}
        />

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >{list.map(({ active, img1, img2, name }, index) => (
            <TouchableOpacity
              style={{
                width: 113.3,
                justifyContent: "center",
                alignItems: "center",
              }}
              key={name}
              onPress={() => setActiveTab(index)} 
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={activeTab === index ? img2 : img1} 
              />
              <Text
                style={[
                  styles.icon_label,
                  { color: activeTab === index ? "#2E0505" : colors.grey }
                ]}
              >
                {name}
              </Text>
            </TouchableOpacity>
          ))}
          
        </View>
      </View>
    </>
  );
};

export default Bottom_Tab;

const styles = StyleSheet.create({
  tab: {
    paddingHorizontal: 13,
    paddingTop: 8,
    paddingBottom: 10,
    width: 340,
    backgroundColor: "white",
    shadowColor: colors.grey,
    elevation:2,
    shadowOffset: { height: .3, width: .4 },
    shadowOpacity: 0.8,
    borderRadius: 50,
    position: "absolute",
    bottom: "8%",
    zIndex: 1,
    alignSelf: "center",
  },
  icon_label: {
    fontSize: 12,
    marginTop: 8,
    fontWeight: "400",
    lineHeight: 13.64,
    fontFamily: "Nunito",
  },
});
