import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

const AnimatedDotValueXY = () => {
  const animatedValue = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: { x: 150, y: 150 }, // Move to position (150, 150)
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={{
          borderRadius: 70 / 2,
          width: 70,
          height: 70,
          backgroundColor: "darkslateblue",
          transform: [
            { translateX: animatedValue.x },
            { translateY: animatedValue.y },
          ],
        }}
      />
    </View>
  );
};

export default AnimatedDotValueXY;

const styles = StyleSheet.create({});
