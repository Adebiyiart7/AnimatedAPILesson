import { Animated, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const FadeInView = () => {
  const [fadeAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      fadeAnimation, // Animated valiue to me updated
      {
        toValue: 1, // Final opacity value
        duration: 2000, // Animated duration in milliseconds
        useNativeDriver: true, // Enable native driver for better performance
      }
    ).start(); // Start the animation
  }, [fadeAnimation]); // Dependency array to trigger effect only once

  return (
    <Animated.View style={{ ...styles.fadeInView, opacity: fadeAnimation }}>
      <Text style={styles.text}>Fade In View</Text>
    </Animated.View>
  );
};

export default FadeInView;

const styles = StyleSheet.create({
  fadeInView: {
    width: 250,
    height: 50,
    backgroundColor: "darkslateblue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
