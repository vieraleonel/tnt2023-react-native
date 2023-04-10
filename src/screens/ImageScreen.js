import { Button, SafeAreaView, StyleSheet, Text } from "react-native";

const ImageScreen = () => {
  const _handleGalleryPress = () => {
    console.log("Elegir desde la galería");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>ImageScreen</Text>
      <Button title="Elegir desde la galería" onPress={_handleGalleryPress} />
    </SafeAreaView>
  );
};

export { ImageScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
