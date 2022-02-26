import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Ball from "./Ball";

const Practice = () => {
  const [position, setPosition] = useState(new Animated.ValueXY(0, 0));

  useEffect(() => {
    Animated.spring(position, {
      toValue: { x: 200, y: 500 },
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View style={position.getLayout()}>
      <View>
        <Ball />
      </View>
    </Animated.View>
  );
};

export default Practice;
