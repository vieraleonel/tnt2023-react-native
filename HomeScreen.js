import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HomeLink } from "./HomeLink";
import { ROUTES } from "./routes";

const HomeScreen = () => {
  const navigation = useNavigation();

  const _handlePress = () => {
    navigation.navigate(ROUTES.CHAT);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 10,
          flex: 1,
        }}
      >
        <Text style={styles.titulo}>Inicio</Text>
        <Text style={styles.subtitulo}>Resumen</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.cuadrado}>
            <Text>
              <Ionicons name="chatbubbles-sharp" size={15} color="#0070F0" />
            </Text>
          </View>

          <View style={styles.cuadrado}>
            <Text>2</Text>
          </View>
          <View style={styles.cuadrado}>
            <Text>3</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <Button title="ESTO ES UN BOTON" />
          <Pressable onPressIn={_handlePress}>
            <HomeLink
              colorFondo="#FFF9F0"
              colorAccionTexto="#A05E03"
              titulo="Canal de texto"
              subtitulo="Chatea con la IA"
              accionTexto="chateá"
            />
          </Pressable>
          <HomeLink
            colorFondo="#F0F0FF"
            colorAccionTexto="#5555CB"
            titulo="Canal de imagen"
            subtitulo="Imágenes desde en imágenes"
            accionTexto="creá"
          />
          <HomeLink
            colorFondo="#FFF0FD"
            colorAccionTexto="#CB55AA"
            titulo="Canal de voz"
            subtitulo="Convertí voz a texto"
            accionTexto="hablá"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export { HomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
  },
  cuadrado: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
});
