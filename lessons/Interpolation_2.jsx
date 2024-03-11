import { Animated, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";

const Interpolation_2 = () => {
  const [animatedValue] = useState(new Animated.Value(0));

  const inputRange = [0, 1];
  const outputRange = [1, -130];

  const interpolatedValue = animatedValue.interpolate({
    inputRange,
    outputRange,
  });

  const animate = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  animate();

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.view}>
        <Animated.View
          style={{
            height: interpolatedValue,
            transform: [
              //   { skewX: interpolatedValue },
              //   { rotate: interpolatedValue },
              // { scale: interpolatedValue },
              { translateY: interpolatedValue },
              { translateX: interpolatedValue },
            ],
          }}
        >
          <Animated.View style={{ ...styles.circle, height: 50 }} />
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default Interpolation_2;

const styles = StyleSheet.create({
  circle: {
    width: 50,
    backgroundColor: "darkslateblue",
    borderRadius: 50,
  },
  scroll: { width: "100%" },
  view: {
    height: 1000,
    alignItems: "center",
    marginTop: 100,
  },
});
