//  REACT NATIVE IMPORTS
import { Image, View } from "react-native";

// STYLES
import styles from "./style";

export default function Splash() {
  return (
    <View style={styles.container}>
      {/* Faixa superior */}
      <View style={styles.topBar} />

      {/* Área da logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/Logo AAC UERJ.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Faixa inferior */}
      <View style={styles.bottomContainer}>
        <View style={styles.bottomBrown} />
        <View style={styles.bottomBlue} />
      </View>
    </View>
  );
}
