import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home_Screen from "../screens/home";
import Notification_Screen from "../screens/notifications";
import Search_Screen from "../screens/search";
import News_Details_Screen from "../screens/news_details";
import Notification_Header from "../components/screens/notification/header";
import { colors } from "../theme/colors";

type AppStackParamList = {
  Home: undefined;
  Search: undefined;
  News_Details: { id: number };
  Notification: undefined;
};
const Stack = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home_Screen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification_Screen}
        options={{
          // header:()=>(<Notification_Header/>),
          headerShown:false,
          // header: () => {
          //   return (
          //     <>
          //       <Notification_Header />
          //     </>
          //   );
          // },
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search_Screen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      />
      <Stack.Screen
        name="News_Details"
        component={News_Details_Screen}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
