import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import StudentHomeScreen from "../screens/StudentHomeScreen";
import StudentHistoryScreen from "../screens/StudentHistoryScreen";

const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StudentHomeScreen" component={StudentHomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StudentHistoryScreen" component={StudentHistoryScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation