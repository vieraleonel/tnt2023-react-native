import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
} from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { SafeScreen } from "../components/SafeScreen";
import { colors } from "../theme/colors";
import { Header } from "../components/Header";
import { UserTextMessage } from "../components/UserTextMessage";
import { IaTextMessage } from "../components/IaTextMessage";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

// msgs = [
//   {
//     // id: 11111,
//     message: "Hola",
//     isUser: true,
//   }
// ]

const TextScreen = () => {
  const [texto, setTexto] = useState("");
  const [msgs, setMsgs] = useState([]);
  const isFocused = useIsFocused();

  const fetchApi = async (message) => {
    try {
      const response = await fetch(
        `https://tnt2023.panaltesting.com.ar/chat?question=${message}`
      );
      const data = await response.json();
      setMsgs((messagesUpdated) =>
        messagesUpdated.concat({ message: data.mensaje, isUser: false })
      );
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    if (isFocused) {
    }
  }, [isFocused]);

  const _addUserMessage = () => {
    if (texto !== "") {
      setMsgs(msgs.concat({ message: texto, isUser: true }));
      fetchApi(texto);
      setTexto("");
    }
  };

  return (
    <SafeScreen>
      <Header title="Canal de Texto" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={{ gap: 20 }}
        >
          {msgs.map((msg, index) =>
            msg.isUser ? (
              <UserTextMessage message={msg.message} key={index} />
            ) : (
              <IaTextMessage message={msg.message} key={index} />
            )
          )}
        </ScrollView>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={{ width: 260, height: 40, paddingHorizontal: 10 }}
              value={texto}
              onChangeText={setTexto}
              onSubmitEditing={_addUserMessage}
            />
          </View>
          <Ionicons.Button
            name="ios-paper-plane-outline"
            size={24}
            color="white"
            backgroundColor="#303437"
            borderRadius={24}
            iconStyle={{ marginLeft: 5, marginTop: 2 }}
            onPress={_addUserMessage}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
};

export { TextScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  messagesContainer: {
    height: Dimensions.get("screen").height * 0.7,
    marginHorizontal: 10,
  },
  inputContainer: {
    width: 265,
    height: 45,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#979C9E",
  },
});
