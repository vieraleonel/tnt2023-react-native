import { Pressable, StyleSheet, Text, View } from "react-native";
import { HomeCardLink } from "../components/HomeCardLink";
import { ROUTES } from "../navigation/routes";
import { SafeScreen } from "../components/SafeScreen";
import { HomeResumenCard } from "../components/HomeResumenCard";
import { useNavigation } from "@react-navigation/native";

const resumenData = [
  { iconName: "chatbubbles-sharp", data: 3950, description: "Rtas gen." },
  { iconName: "image", data: 1000, description: "Img. gen." },
  { iconName: "mic", data: 15, description: "Trad. real." },
];

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
  {
    colorFondo: "#FFF0FD",
    colorAccionTexto: "#CB55AA",
    titulo: "Canal de voz",
    subtitulo: "Convertí voz a texto",
    accionTexto: "hablá",
    routeName: ROUTES.VOICE,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const navToScreen = (routeName) => () => navigation.navigate(routeName);

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
            justifyContent: "space-between",
          }}
        >
          {resumenData.map((item) => (
            <HomeResumenCard
              key={item.iconName}
              {...item}
              // data={item.data}
              // description={item.description}
              // iconName={item.iconName}
            />
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
