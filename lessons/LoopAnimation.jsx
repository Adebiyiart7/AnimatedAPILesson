import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

const LoopAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      [
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ],
      {
        iterations: 4,
        iterations: -1, // To repeat the animation indefinitely
      }
    ).start();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
          opacity: opacity,
        }}
      />
    </View>
  );
};

export default LoopAnimation;
