import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Practice from './components/Practice';
import GlucoseChart from './components/GlucoseChart';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Practice />
      {/* <GlucoseChart /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
