import { StyleSheet } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.background_primary,
    position: "relative",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorBox: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: GlobalStyle.colors.error,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 20,
    fontFamily: GlobalStyle.fonts.neuzeitGrotesk_400,
    color: GlobalStyle.colors.text_secondary,
    marginBottom: 10,
  },
  errorSubText: {
    fontSize: 20,
    fontFamily: GlobalStyle.fonts.neuzeitGrotesk_400,
    color: GlobalStyle.colors.text_secondary,
  },
  mapView: {
    flex: 1,
    position: "relative",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    right: 0,
    marginRight: 12,
    marginBottom: 22,
  },

  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: GlobalStyle.colors.background_primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  buttonActive: {
    backgroundColor: GlobalStyle.colors.active,
  },
});
