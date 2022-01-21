import { StyleSheet } from "react-native";
import { GlobalStyle } from "../../styles/GlobalStyles";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyle.colors.background_primary,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: GlobalStyle.colors.background_primary,
    borderTopStartRadius: 12,
    borderTopEndRadius: 12,
    top: -10,
  },
  modalIndicatorContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    marginBottom: 20,
  },
  modalIndicator: {
    width: "30%",
    height: 3,
    borderRadius: 50,
    backgroundColor: GlobalStyle.colors.background_secondary,
  },
  timerContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  timerTitle: {
    fontSize: 24,
    fontFamily: GlobalStyle.fonts.neuzeitGrotesk_400,
  },
  timerCounter: {
    fontSize: 64,
    fontFamily: GlobalStyle.fonts.neuzeitGrotesk_900,
  },
  metricsContainer: {
    flex: 2,
    backgroundColor: GlobalStyle.colors.background_primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: GlobalStyle.colors.border,
  },
  metricsInnerContainer: {
    flex: 2,
    backgroundColor: GlobalStyle.colors.background_primary,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  metricsInnerTitle: {
    fontSize: 18,
    fontFamily: GlobalStyle.fonts.neuzeitGrotesk_400,
    opacity: .6,
  },
  metricsInnerCounter: {
    fontSize: 32,
    fontFamily: GlobalStyle.fonts.neuzeitGrotesk_900,
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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: GlobalStyle.colors.error,
  },
  buttonText: {
    fontFamily: "neuzeitGrotesk_400",
    color: GlobalStyle.colors.error,
   
  },
  rightBorder: {
    borderRightWidth: 1,
    borderColor: GlobalStyle.colors.border,
  },
});
