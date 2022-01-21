import { StyleSheet } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.background_primary,
  },
  bottomContainer: {
    width: "100%",
    height: 136,
    backgroundColor: GlobalStyle.colors.background_primary,
    alignContent: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.background_primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyle.colors.background_primary,
    paddingHorizontal: 16,
  },
  button: {
    width: "100%",
    height: 48,
    paddingLeft: 24,
    paddingRight: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    backgroundColor: GlobalStyle.colors.accent,
  },
  buttonText: {
    fontFamily: GlobalStyle.fonts.neuzeitGrotesk_400,
    color: GlobalStyle.colors.text_secondary,
  },
});
