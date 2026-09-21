import { Text, View } from "react-native";
import styles from "./style";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AAC UERJ</Text>

      <Text style={styles.subtitle}>Bem-vindo ao aplicativo!</Text>
    </View>
  );
}
