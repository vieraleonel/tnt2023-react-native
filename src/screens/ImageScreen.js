import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { SafeScreen } from "../components/SafeScreen";
import { Header } from "../components/Header";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { ROUTES } from "../navigation/routes";
import { sendImageToChatbot } from "../services/IAService";
import { incrementImageResponsesCount } from "../services/analyticsStorageService";

const ImageScreen = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const params = useRoute().params;
  const isFocused = useIsFocused();
  const [chatMessages, setChatMessages] = useState([]);

  const sendImage = async (imageUri) => {
    const responseImg = await sendImageToChatbot(imageUri);
    incrementImageResponsesCount();
    setChatMessages((chatMessages) =>
      chatMessages.concat({ imageUri: responseImg, isUser: false })
    );
  };

  const addMessage = (imageUri) => {
    setChatMessages((chatMessages) =>
      chatMessages.concat({ imageUri: imageUri, isUser: true })
    );
    sendImage(imageUri);
  };

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 1000);
    }
  }, [isFocused]);

  const navigateToCamera = () => {
    navigation.navigate(ROUTES.CAMERA, { addMessage });
  };

  return (
    <SafeScreen>
      <Header title="Canal de Imagen" />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
        <ScrollView
          ref={scrollViewRef}
          style={styles.messagesContainer}
          contentContainerStyle={{ gap: 20 }}
        >
        </ScrollView>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
        >
          <View style={styles.inputContainer}>
            <Ionicons
              name="camera"
              size={24}
              color="white"
              onPress={navigateToCamera}
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
