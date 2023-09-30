import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import AlbumDetailScreen from "./screens/AlbumDetailScreen";
import PlayerScreen from "./screens/PlayerScreen";
import { StatusBar } from "react-native";
import TrackPlayer from "react-native-track-player";

const Stack = createStackNavigator();

const App = () => {
  // Inicializar el reproductor una vez al cargar la aplicación
  useEffect(() => {
    async function initializePlayer() {
      await TrackPlayer.setupPlayer();
      // Puedes agregar configuración adicional aquí si es necesario
    }

    initializePlayer();
  }, []);

  return (
    <NavigationContainer>
      {/* Place the ExpoStatusBar component here */}
      <StatusBar style="auto" />

      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlbumScreen"
          component={AlbumDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlayerScreen"
          component={PlayerScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
