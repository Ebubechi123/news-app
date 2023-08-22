import React from "react";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Notification_Header from "../../components/screens/notification/header";
import Notification_Card from "../../components/screens/notification/notification_card";

const Notification_Screen: React.FC = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Notification_Header/>
        <View style={styles.list_view} >
         <Notification_Card/>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Notification_Screen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: Platform.OS === "android" ? 40 : 20,
  },
  list_view:{
    width:"100%",
    paddingHorizontal:23,
    marginTop:23
  }

});
