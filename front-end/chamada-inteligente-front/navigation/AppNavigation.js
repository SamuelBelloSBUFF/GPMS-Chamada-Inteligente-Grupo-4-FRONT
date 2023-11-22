import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import StudentHomeScreen from "../screens/StudentHomeScreen";
import StudentHistoryScreen from "../screens/StudentHistoryScreen";
import StudentClassroomsScreen from "../screens/StudentClassroomsScreen";
import TeacherHomeScreen from "../screens/TeacherHomeScreen";
import TeacherClassroomsScreen from "../screens/TeacherClassroomsScreen";
import StudentClassAttendanceScreen from "../screens/StudentClassAttendanceScreen";

const { createStackNavigator } = require("@react-navigation/stack");

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StudentHomeScreen" component={StudentHomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StudentHistoryScreen" component={StudentHistoryScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StudentClassroomsScreen" component={StudentClassroomsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherHomeScreen" component={TeacherHomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherClassroomsScreen" component={TeacherClassroomsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="StudentClassAttendanceScreen" component={StudentClassAttendanceScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation