import { StyleSheet, Text, View } from "react-native";
const HomeLink = ({
  colorFondo,
  colorAccionTexto,
  titulo,
  subtitulo,
  accionTexto,
}) => {
  return (
    <View style={[styles.rectangulo, { backgroundColor: colorFondo }]}>
      <View>
        <Text style={styles.rectanguloTitulo}>{titulo}</Text>
        <Text style={styles.rectanguloSubtitulo}>{subtitulo}</Text>
      </View>
      <View style={styles.reactanguloAccionContenedor}>
        <Text
          style={[styles.reactanguloAccionTexto, { color: colorAccionTexto }]}
        >
          {accionTexto}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangulo: {
    width: "100%",
    height: 100,
    borderRadius: 24,
    paddingLeft: 24,
    paddingTop: 20,
    paddingRight: 84,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rectanguloTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 24,
  },
  rectanguloSubtitulo: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 12,
  },
  reactanguloAccionContenedor: {
    borderRadius: 48,
    backgroundColor: "white",
    height: 30,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  reactanguloAccionTexto: {
    fontSize: 10,
    lineHeight: 12,
    textTransform: "uppercase",
  },
});

export { HomeLink };
