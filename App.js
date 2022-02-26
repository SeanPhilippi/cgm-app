import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Practice from "./components/Practice";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Practice />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
