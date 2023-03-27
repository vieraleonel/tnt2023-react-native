import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { HomeLink } from "./HomeLink";

const ChatScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text>CHAT SCREEN</Text>
  </SafeAreaView>
);

export { ChatScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
