import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 10,
          flex: 1,
        }}
      >
        <Text style={styles.titulo}>Home</Text>
        <Text style={styles.subtitulo}>Overview</Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.cuadrado}></View>
          <View style={styles.cuadrado}></View>
          <View style={styles.cuadrado}></View>
        </View>
        <View
          style={{
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <View style={[styles.rectangulo, { backgroundColor: "#FFF9F0" }]}>
            <View>
              <Text style={styles.subtitulo}>Overview</Text>
              <Text style={styles.subtitulo}>Overview</Text>
            </View>
            <View
              style={{
                borderRadius: 48,
                backgroundColor: "white",
                height: 30,
                width: 70,
                padding: 9,
              }}
            >
              <Text style={{ fontSize: 10, lineHeight: 12, color: "#A05E03" }}>
                WARM-UP
              </Text>
            </View>
          </View>
          <View
            style={[styles.rectangulo, { backgroundColor: "#F0F0FF" }]}
          ></View>
          <View
            style={[styles.rectangulo, { backgroundColor: "#FFF0FD" }]}
          ></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
    backgroundColor: "green",
  },
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
});
