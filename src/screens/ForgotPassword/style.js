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

  LogoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },

  inputContainer: {
    width: "100%",
  },

  textView: {
    width: "80%",
    marginBottom: 20,
  },

  text: {
    color: colors.darkGray,
  },

  buttonContainer: {
    width: "100%",
    marginTop: 10,
  },
});

export default styles;
