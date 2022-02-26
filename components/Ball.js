import { StyleSheet, Text, View } from "react-native";

const styles = {
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
  },
};

const Ball = () => {
  return <View style={styles.ball}></View>;
};

export default Ball;
