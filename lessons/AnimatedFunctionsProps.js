import { Animated, Easing, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

const AnimatedFunctionsProps = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  // 1. TIMING
  //   useEffect(() => {
  //     Animated.timing(animatedValue, {
  //       toValue: 1,
  //       duration: 1000,
  //       useNativeDriver: false,
  //       easing: Easing.bounce,
  //     }).start();
  //   }, []);

  // 2. SPRING
  // useEffect(() => {
  //   Animated.spring(animatedValue, {
  //     toValue: 1,
  //     friction: 5,
  //     useNativeDriver: false,
  //     easing: Easing.linear,
  //   }).start();
  // }, []);

  // 3. SPRING PROPS
  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: 1, // final value of the animation
      velocity: 2, // initial velocity of the animation
      tension: 100, // controls the "stiffness" of the spring
      friction: 5, // controls the "damping of the spring"
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

export default AnimatedFunctionsProps;

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
