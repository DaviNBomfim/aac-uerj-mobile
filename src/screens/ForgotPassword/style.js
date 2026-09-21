import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    color: colors.primary,
    fontWeight: "600",
  },
});

export default styles;
