import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  topBar: {
    height: 32,
    backgroundColor: colors.brown,
  },

  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: "100%",
    height: 290,

    transform: [{ translateY: -50 }],
  },

  bottomContainer: {
    width: "100%",
  },

  bottomBrown: {
    height: 12,
    backgroundColor: colors.brown,
  },

  bottomBlue: {
    height: 36,
    backgroundColor: colors.primary,
  },
});

export default styles;
