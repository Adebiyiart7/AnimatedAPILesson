import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

const EasingFunctions = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  // TIMING
  //   useEffect(() => {
  //     Animated.timing(animatedValue, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: false,
  //       easing: Easing.bounce,
  //     }).start();
  //   }, []);

  // SPRING
  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1,
      friction: 5,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }, []);

  const boxInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, { transform: [{ translateX: boxInterpolation }] }]}
      />
    </View>
  );
};

export default EasingFunctions;

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "darkslateblue",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
