import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "./screens/SplashScreen";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "react-native";


const Stack = createStackNavigator();

const App = () => {
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

        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
