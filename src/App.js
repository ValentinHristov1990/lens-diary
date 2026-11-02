import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Lens Diary</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    backgroundColor: "#60a1fa",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 36,
    paddingTop: 30,
    paddingBottom: 30,
  },
});
