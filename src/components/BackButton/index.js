// REACT NATIVE
import { Pressable } from "react-native";

// STYLE
import styles from "./style";

// HOOKS
import { useNavigation } from "@react-navigation/native";

// ICONS
import { Ionicons } from "@expo/vector-icons";

// COLORS
import { colors } from "../../constants/colors";

export default function BackButton({ onClick }) {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={32} color={colors.darkGray} />
    </Pressable>
  );
}
