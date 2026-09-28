// REACT
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

// STYLES
import { colors } from "../../constants/colors";
import styles from "./style";

// HOOKS
import { useState } from "react";

// COMPONENTS
import BackButton from "../../components/BackButton";
import BottomDecoration from "../../components/BottomDecoration";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";
import TopDecoration from "../../components/TopDecoration";

//ICONS
import { Ionicons } from "@expo/vector-icons";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <TopDecoration />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >
          <BackButton />
          <View style={styles.LogoContainer}>
            <Image
              source={require("../../assets/images/Logo AAC UERJ.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomInput
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              icon={
                <Ionicons
                  name="mail-outline"
                  size={22}
                  color={colors.darkGray}
                />
              }
            />
          </View>

          <View style={styles.textView}>
            <Text style={styles.text}>
              Enviaremos um link para redefinir sua senha para o e-mail
              cadastrado.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              title="Confirmar"
              disabled={!email}
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomDecoration />
    </View>
  );
}
