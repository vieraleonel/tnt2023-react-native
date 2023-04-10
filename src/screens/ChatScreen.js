import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { HomeLink } from "../components/HomeLink";
import { useIsFocused } from "@react-navigation/native";

const ChatScreen = () => {
  const isFocused = useIsFocused();
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState("");

  const _handlePress = () => {
    console.log("Sumando 1");
    setContador(contador + 1);
    console.log("Contador", contador);
  };

  const _handleChange = (text) => {
    console.log("Cambiando texto");
    setTexto(text);
  };

  const _handleEnviar = () => {
    console.warn(texto);
    setTexto("");
  };

  console.log("is focused ChatScreen?", isFocused ? "✅" : "🛑");

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <View>
          <Button title="Sumar 1" onPress={_handlePress} />
          <Text style={{ marginTop: 50 }}>Contador: {contador}</Text>
          <Text style={{ marginTop: 50 }}>Texto: {texto}</Text>
        </View>

        <View style={{ width: "100%" }}>
          <TextInput
            style={{ height: 100, backgroundColor: "yellow" }}
            value={texto}
            onChangeText={setTexto}
          />
          <Button title="Enviar" onPress={_handleEnviar} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { ChatScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
