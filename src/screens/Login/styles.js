import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  keyboardView: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 30,
  },

  logo: {
    width: 210,
    height: 210,
    marginBottom: 20,
  },

  forgotPassword: {
    width: "100%",
    textAlign: "right",
    color: colors.textBlue,
    fontSize: 14,
    marginTop: -8,
    marginBottom: 24,
  },

  registerContainer: {
    flexDirection: "row",
    marginTop: 24,
    alignItems: "center",
  },

  registerLink: {
    color: colors.textBlue,
    fontSize: 15,
    fontWeight: "600",
    marginLeft: 4,
  },
});

export default styles;
