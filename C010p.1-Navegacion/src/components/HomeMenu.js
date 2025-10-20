import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
const Tab = createBottomTabNavigator();

function HomeMenu() {
    return (
        <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: () => (
              <Entypo name="home" size={24} color="black" />
            ), headerShown: false
          }} />
          <Tab.Screen name="Profile" component={Profile} options={{
            tabBarIcon: () => (
              <FontAwesome name="user" color="black" size={24} />
            ), headerShown: false
          }} />
        </Tab.Navigator>
    );
}

export default HomeMenu;