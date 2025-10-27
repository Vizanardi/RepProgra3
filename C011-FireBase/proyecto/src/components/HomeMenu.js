import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Usuarios from "../Screens/Usuarios";
import NuevoPost from "../Screens/NuevoPost";
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
          <Tab.Screen name="usuarios" component={Usuarios} options={{
            tabBarIcon: () => (
              <FontAwesome5 name="users" size={24} color="black" />
            ), headerShown: false
          }} />
          <Tab.Screen name="nuevopost" component={NuevoPost} options={{
            tabBarIcon: () => (
              <FontAwesome6 name="images" size={24} color="black" />
            ), headerShown: false
          }} />
        </Tab.Navigator>
    );
}

export default HomeMenu;