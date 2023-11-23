import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import StudentHomeScreen from "../screens/StudentHomeScreen";
import StudentHistoryScreen from "../screens/StudentHistoryScreen";
import StudentClassroomsScreen from "../screens/StudentClassroomsScreen";
import StudentClassAttendanceScreen from "../screens/StudentClassAttendanceScreen";
import TeacherHomeScreen from "../screens/TeacherHomeScreen";
import TeacherClassroomsScreen from "../screens/TeacherClassroomsScreen";
import TeacherClassStudentsScreen from "../screens/TeacherClassStudentsScreen";
import TeacherClassStudentAttendancesScreen from "../screens/TeacherClassStudentAttendancesScreen";
import TeacherScheduleAttendanceScreen from "../screens/TeacherScheduleAttendanceScreen";

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
        <Stack.Screen name="StudentClassAttendanceScreen" component={StudentClassAttendanceScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherHomeScreen" component={TeacherHomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherClassroomsScreen" component={TeacherClassroomsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherClassStudentsScreen" component={TeacherClassStudentsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherClassStudentAttendancesScreen" component={TeacherClassStudentAttendancesScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="TeacherScheduleAttendanceScreen" component={TeacherScheduleAttendanceScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default AppNavigation