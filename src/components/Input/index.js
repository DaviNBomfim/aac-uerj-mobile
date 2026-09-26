import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./styles";

export default function CustomInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
  onIconPress,
  inputRef,
  editable = true,
  keyboardType = "default",
  autoCapitalize = "none",
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#545456"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          ref={inputRef}
          editable={editable}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
        />
        {icon && (
          <Pressable
            onPress={onIconPress}
            style={styles.iconButton}
            disabled={!onIconPress}
          >
            {icon}
          </Pressable>
        )}
      </View>
    </View>
  );
}
