// HOOKS
import { useRef, useState } from "react";

// CONSTANTES
import { colors } from "../../constants/colors";

// ICONS
import { Ionicons } from "@expo/vector-icons";

// REACT NATIVE
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

// ESTILOS
import styles from "./styles";

// COMPONENTES
import BottomDecoration from "../../components/BottomDecoration";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";
import TopDecoration from "../../components/TopDecoration";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef(null);

  return (
    <View style={styles.container}>
      <TopDecoration />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Image
            source={require("../../assets/images/Logo AAC UERJ.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <CustomInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            icon={
              <Ionicons name="mail-outline" size={22} color={colors.darkGray} />
            }
          />

          <CustomInput
            label="Senha"
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            icon={
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={22}
                color={colors.darkGray}
              />
            }
            onIconPress={() => {
              setShowPassword((prev) => !prev);
              passwordInputRef.current?.focus();
            }}
            inputRef={passwordInputRef}
          />

          <Pressable onPress={() => console.log("Ir para Esqueceu Senha")}>
            <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
          </Pressable>

          <CustomButton title="Entrar" onPress={() => console.log("Login")} />

          <View style={styles.registerContainer}>
            <Pressable onPress={() => console.log("Ir para Cadastro")}>
              <Text style={styles.registerLink}>Cadastre-se</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomDecoration />
    </View>
  );
}
