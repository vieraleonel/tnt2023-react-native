import {
  Button,
  Dimensions,
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { useEffect, useState } from "react";
import Constants from "expo-constants";
import { CustomCamera } from "../components/CustomCamera";
import { SafeScreen } from "../components/SafeScreen";
import { Header } from "../components/Header";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ROUTES } from "../navigation/routes";
import { sendImageToChatbot } from "../services/IAService";

const ImageScreen = () => {
  const navigation = useNavigation();
  const params = useRoute().params;
  const isFocused = useIsFocused();
  const [chatMessages, setChatMessages] = useState([]);

  const sendImage = async (imageUri) => {
    const responseImg = await sendImageToChatbot(imageUri);
    setChatMessages((chatMessages) =>
      chatMessages.concat({ imageUri: responseImg, isUser: false })
    );
  };

  useEffect(() => {
    if (isFocused && params?.imageUri) {
      setChatMessages((chatMessages) =>
        chatMessages.concat({ imageUri: params.imageUri, isUser: true })
      );
      sendImage(params.imageUri);
      navigation.setParams({ imageUri: undefined });
    }
  }, [isFocused, params]);

  return (
    <SafeScreen>
      <Header title="Canal de Imagen" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          style={styles.messagesContainer}
          contentContainerStyle={{ gap: 20 }}
        ></ScrollView>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <View style={styles.inputContainer}>
            <Ionicons
              name="camera"
              size={24}
              color="white"
              onPress={() => navigation.navigate(ROUTES.CAMERA)}
            />
            <Ionicons name="image" size={24} color="white" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeScreen>
  );
};

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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    width: 100,
    padding: 10,
  },
});

export { ImageScreen };
