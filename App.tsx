import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ConfigButton } from "./src/components/ConfigButton";
import { useFonts } from "./src/hooks/useFonts";
import { Home } from "./src/pages/Home";
import { Recording } from "./src/pages/Recording";
import { GlobalStyle } from "./src/styles/GlobalStyles";

const Stack = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Recording: undefined;
      //Test: {userId: string} // se for passar parâmetros
    }
  }
}

export default function App() {
  const [IsReady, SetIsReady] = useState<boolean>(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => {}}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Group
            screenOptions={{
              title: "Pedalada",
              headerBackTitle: "",
              headerTintColor: GlobalStyle.colors.text_primary,
              headerStyle: {
                backgroundColor: GlobalStyle.colors.background_primary,
              },
              headerRight: () => <ConfigButton />,
            }}
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Recording' component={Recording} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
