import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { COLORS } from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text style={styles.title}>Lens Diary</Text>

      <Pressable
        style={styles.testView}
        onPress={() => alert("Test 1 is Pressed!")}
        title="Test 1"
      >
        <View>
          <Text style={styles.testText}>Test view 1</Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.testView}
        onPress={() => alert("Test 2 is Pressed!")}
        title="Test 2"
      >
        <View>
          <Text style={styles.testText}>Test view 2</Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.testView}
        onPress={() => alert("Test 3 is Pressed!")}
        title="Test 3"
      >
        <View>
          <Text style={styles.testText}>Test view 3</Text>
        </View>
      </Pressable>

      <Pressable
        style={styles.testView}
        onPress={() => alert("Test 4 is Pressed!")}
        title="Test 4"
      >
        <View>
          <Text style={styles.testText}>Test view 4</Text>
        </View>
      </Pressable>
      <View>
        <Image
          source={require("./asserts/test-img.jpg")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    paddingTop: 60,
  },
  title: {
    backgroundColor: COLORS.accent,
    color: COLORS.accentText,
    borderRadius: 10,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    paddingTop: 18,
    paddingBottom: 18,
    marginBottom: 24,
  },
  testView: {
    backgroundColor: COLORS.surface,
    borderRadius: 10,
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  testText: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "500",
  },
});
