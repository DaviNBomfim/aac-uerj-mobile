// REACT NATIVE
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  View,
} from "react-native";

// COLORS
import { colors } from "../../constants/colors";

// BIBLIOTECAS
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

// STYLES
import styles from "./style";

// COMPONENTS
import BackButton from "../../components/BackButton";
import BottomDecoration from "../../components/BottomDecoration";
import CustomButton from "../../components/Button";
import CustomInput from "../../components/Input";
import TopDecoration from "../../components/TopDecoration";

// HOOKS
import { useRef, useState } from "react";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [matricula, setMatricula] = useState("");
  const [dataMatricula, setDataMatricula] = useState(null);
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);
  const senhaInputRef = useRef(null);
  const confirmarSenhaInputRef = useRef(null);
  const [mostrarCalendario, setMostrarCalendario] = useState(false);

  const abrirCalendario = () => {
    setMostrarCalendario(true);
  };

  const selecionarData = (event, selectedDate) => {
    setMostrarCalendario(false);

    selectedDate && setDataMatricula(selectedDate);
  };

  const formatarData = (data) => {
    if (!data) return "";

    return data.toLocaleDateString("pt-BR");
  };

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
          <BackButton />
          <View style={styles.LogoContainer}>
            <Image
              source={require("../../assets/images/Logo AAC UERJ.png")}
              style={styles.logo}
            />
          </View>

          <View style={styles.inputContainer}>
            <CustomInput
              label="Nome Completo"
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
            />

            <CustomInput
              label="Email"
              placeholder="Digite seu email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomInput
              label="Matrícula"
              placeholder="Digite sua matrícula"
              value={matricula}
              onChangeText={setMatricula}
              keyboardType="numeric"
            />

            <Pressable onPress={abrirCalendario}>
              <CustomInput
                label="Data de Matrícula"
                placeholder="dd/mm/aaaa"
                value={formatarData(dataMatricula)}
                icon={
                  <Ionicons
                    name="calendar-outline"
                    size={22}
                    color={colors.darkGray}
                  />
                }
                editable={false}
              />

              {mostrarCalendario && (
                <DateTimePicker
                  value={dataMatricula ?? new Date()}
                  mode="date"
                  display="default"
                  onChange={selecionarData}
                />
              )}
            </Pressable>

            <CustomInput
              label="Senha"
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!showSenha}
              icon={
                <Ionicons
                  name={showSenha ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color={colors.darkGray}
                />
              }
              onIconPress={() => {
                setShowSenha((prev) => !prev);
                senhaInputRef.current?.focus();
              }}
              inputRef={senhaInputRef}
              autoCapitalize="none"
            />

            <CustomInput
              label="Confirmar Senha"
              placeholder="Repita sua senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry={!showConfirmarSenha}
              icon={
                <Ionicons
                  name={showConfirmarSenha ? "eye-outline" : "eye-off-outline"}
                  size={22}
                  color={colors.darkGray}
                />
              }
              onIconPress={() => {
                setShowConfirmarSenha((prev) => !prev);
                confirmarSenhaInputRef.current?.focus();
              }}
              inputRef={confirmarSenhaInputRef}
              autoCapitalize="none"
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton title="Cadastrar" onPress={() => {}} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomDecoration />
    </View>
  );
}
