import { Animated, StyleSheet, View } from "react-native";
import React, { useEffect, useRef } from "react";

const DelayedAnimation = () => {
  const translateXValue = useRef(new Animated.Value(0)).current;
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // Rotate animation
      Animated.timing(rotateValue, {
        toValue: 360, // rotate 360 deg
        duration: 1000,
        useNativeDriver: true,
      }),

      Animated.delay(1000),

      // Translate animateion
      Animated.timing(translateXValue, {
        toValue: 100, // Translate 100 units horizontally
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          transform: [
            { translateX: translateXValue },
            {
              rotate: rotateValue.interpolate({
                inputRange: [0, 360],
                outputRange: ["0deg", "360deg"],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

export default DelayedAnimation;

const styles = StyleSheet.create({});
