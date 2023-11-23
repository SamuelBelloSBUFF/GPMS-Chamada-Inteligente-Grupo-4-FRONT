import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useLoadedAssets } from "./hooks/useLoadedAssets";
import { useColorScheme } from "react-native";
import AppNavigation from "./navigation/AppNavigation";

import * as Location from 'expo-location';

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme();
  let location = Location.requestForegroundPermissionsAsync();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppNavigation></AppNavigation>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
