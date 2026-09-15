import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginBottom: 18,
    alignSelf: "center",
  },

  label: {
    fontSize: 16,
    color: colors.darkGray,
    marginBottom: 6,
    fontWeight: "500",
  },

  inputContainer: {
    position: "relative",
  },

  input: {
    height: 52,
    backgroundColor: colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingHorizontal: 16,
    paddingRight: 48,
    fontSize: 16,
    color: colors.black,
  },

  iconButton: {
    position: "absolute",
    right: 12,
    top: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
