import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Practice from './components/Practice';
// import GlucoseChart from './components/GlucoseChart';

export default function App() {
  return (
    <View>
      {/* <StatusBar style='auto' /> */}
      <Practice />
      {/* <GlucoseChart /> */}
    </View>
  );
}
