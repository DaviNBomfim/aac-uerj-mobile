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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
  },

  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
  },

  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },

  LogoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
});

export default styles;
