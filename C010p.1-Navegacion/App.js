import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeMenu from './src/components/HomeMenu';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
        <Stack.Screen name="HomeMenu" component={HomeMenu} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
;
