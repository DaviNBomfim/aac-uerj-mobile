//  REACT NATIVE IMPORTS
import { Image, View } from "react-native";

// HOOKS
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

// STYLES
import styles from "./style";

export default function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
