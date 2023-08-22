import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { RefObject } from "react";
import { colors } from "../../../theme/colors";
import { Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
interface SheetProps {
  bottomSheetRef?: RefObject;
}
const list = [
  {
    name: "Recommended",
  },
  {
    name: "Latest",
  },
  {
    name: "Most Viewed",
  },
  {
    name: "Channel",
  },
  {
    name: "Following",
  },
];

const FilterSheet = (props: SheetProps) => {
  const snapPoints = useMemo(() => ["48%"], []);
  const sheetHandler = () => {
    props.bottomSheetRef.current.close();
  };
  return (
    <BottomSheet
      index={0}
      snapPoints={snapPoints}
      ref={props.bottomSheetRef}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        />
      )}
    >
      <View style={styles.contentContainer}>
        <View style={styles.head}>
          <Text style={styles.filter}>Filter</Text>
          <TouchableOpacity style={styles.reset_btn} onPress={sheetHandler}>
            <Octicons name="trash" size={14.25} color={"#041E2F"} />
            <Text style={styles.reset}>Reset</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sort_by_container}>
          <View style={{ width: "100%" }}>
            <Text style={styles.sort_by}>Sort By</Text>
          </View>
          <View style={styles.list_container}>
            {list.map(({ name }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "white",
                  borderRadius: 30,
                  borderWidth: 1,
                  paddingVertical: 12,
                  paddingHorizontal: 13,
                  padding: 12,
                  borderColor: colors.light_grey,
                }}
              >
                <Text style={[styles.reset, { textAlign: "center" }]}>
                  {name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ width: "100%", paddingHorizontal: 23, marginTop: 40 }}>
          <TouchableOpacity style={{ width: "100%" }} onPress={sheetHandler}>
            <LinearGradient
              colors={["#FF3A44", "#FF8086"]}
              style={styles.button}
              start={{ x: 0, y: 0.2 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.btn_text}>Save</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  head: {
    width: "100%",
    paddingHorizontal: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filter: {
    fontFamily: "Nunito",
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 30,
    letterSpacing: 0,
    textAlign: "left",
  },
  reset_btn: {
    width: 90,
    borderWidth: 1,
    borderColor: "#041E2F",
    padding: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  reset: {
    fontSize: 14,
    fontWeight: "600",
    color: "#041E2F",
  },
  sort_by_container: {
    width: "100%",
    paddingHorizontal: 23,
    marginTop: 23,
  },
  sort_by: {
    fontSize: 14,
    fontWeight: "600",
    color: "#041E2F",
  },
  list_container: {
    width: "100%",
    padding: 0,
    marginTop: 13,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: 18,
  },
  button: {
    width: "100%",
    borderRadius: 50,
    padding: 17,
  },
  btn_text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "800",
  },
});

export default FilterSheet;
