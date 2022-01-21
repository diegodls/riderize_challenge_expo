import * as Font from "expo-font";

const useFonts = async () =>
  await Font.loadAsync({
    neuzeitGrotesk_400: require("../../assets/fonts/NeuzeitGro-Regular.ttf"),
    neuzeitGrotesk_700: require("../../assets/fonts/NeuzeitGro-Bold.ttf"),
    neuzeitGrotesk_900: require("../../assets/fonts/NeuzeitGroExt-Black.ttf"),
  });

export { useFonts };
