import { createStackNavigator } from "@react-navigation/stack";
import Home_Screen from "../screens/home";
import Notification_Screen from "../screens/notifications";
import Search_Screen from "../screens/search";
import News_Details_Screen from "../screens/news_details";

const Stack = createStackNavigator();

const  AppStack=() =>{
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home_Screen} />
      <Stack.Screen name="Notifications" component={Notification_Screen} />
      <Stack.Screen name="Search" component={Search_Screen} />
      <Stack.Screen name="News-Details" component={News_Details_Screen} />
    </Stack.Navigator>
  );
}
export default AppStack;
