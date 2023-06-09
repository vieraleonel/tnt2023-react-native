import { Pressable, StyleSheet, Text, View } from "react-native";
import { HomeCardLink } from "../components/HomeCardLink";
import { ROUTES } from "../navigation/routes";
import { SafeScreen } from "../components/SafeScreen";
import { HomeResumenCard } from "../components/HomeResumenCard";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  getImageResponsesCount,
  getTextResponsesCount,
} from "../services/analyticsStorageService";

const homeCardLinkData = [
  {
    colorFondo: "#FFF9F0",
    colorAccionTexto: "#A05E03",
    titulo: "Canal de texto",
    subtitulo: "Chatea con la IA",
    accionTexto: "chateá",
    routeName: ROUTES.TEXT,
  },
  {
    colorFondo: "#F0F0FF",
    colorAccionTexto: "#5555CB",
    titulo: "Canal de imagen",
    subtitulo: "Imágenes desde en imágenes",
    accionTexto: "creá",
    routeName: ROUTES.IMAGE,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [analalyticsCount, setAnalalyticsCount] = useState([]);

  const navToScreen = (routeName) => () => navigation.navigate(routeName);

  const getCountValues = async () => {
    const [textCount, imageCount] = await Promise.all([
      getTextResponsesCount(),
      getImageResponsesCount(),
    ]);

    setAnalalyticsCount([
      {
        key: "textCount",
        iconName: "chatbubbles-sharp",
        data: textCount,
        description: "Rtas gen.",
      },
      {
        key: "imageCount",
        iconName: "image",
        data: imageCount,
        description: "Img. gen.",
      },
    ]);
  };

  useEffect(() => {
    if (isFocused) {
      getCountValues();
    }
  }, [isFocused]);

  return (
    <SafeScreen>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 10,
          gap: 20,
          flex: 1,
        }}
      >
        <View>
          <Text style={styles.titulo}>Inicio</Text>
          <Text style={styles.subtitulo}>Resumen</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {analalyticsCount.map((item) => (
            <HomeResumenCard {...item} />
          ))}
        </View>

        <View
          style={{
            flex: 1,
            gap: 25,
          }}
        >
          {homeCardLinkData.map((item) => (
            <Pressable onPress={navToScreen(item.routeName)} key={item.titulo}>
              <HomeCardLink {...item} />
            </Pressable>
          ))}
        </View>
      </View>
    </SafeScreen>
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
