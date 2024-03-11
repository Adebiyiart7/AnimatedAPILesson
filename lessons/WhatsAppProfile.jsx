import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const fullname = "Adeeyo Joseph Adebiyi";
const username = "_theCodingChef";

const MAX_IMAGE_HEIGHT = 100;
const MIN_IMAGE_HEIGHT = 40;
const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 60;

const { width: screenWidth } = Dimensions.get("window");

const WhatsAppProfile = React.memo(() => {
  const inputRange = [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT];
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange,
    outputRange: [MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT],
    extrapolate: "clamp",
  });

  const imageHeight = scrollY.interpolate({
    inputRange,
    outputRange: [MAX_IMAGE_HEIGHT, MIN_IMAGE_HEIGHT],
  });

  const imageXInterpolation = scrollY.interpolate({
    inputRange,
    outputRange: [-50, -(screenWidth - 80) / 2],
    extrapolate: "clamp",
  });

  const imageYInterpolation = scrollY.interpolate({
    inputRange,
    outputRange: [0, -MIN_IMAGE_HEIGHT],
    extrapolate: "clamp",
  });

  const nameOpacityInterpolation = scrollY.interpolate({
    inputRange,
    outputRange: [0, 1],
  });

  const nameInterpolation = scrollY.interpolate({
    inputRange,
    outputRange: [50, 85],
    extrapolate: "clamp",
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "darkslateblue",
          zIndex: 1,
          elevation: Platform.OS === "android" ? 1 : 0,
        }}
      >
        <Animated.View
          style={{
            width: "100%",
            marginTop: 25,
            height: headerHeight,
          }}
        >
          <View style={styles.navItems}>
            <MaterialCommunityIcons
              name="arrow-left"
              color={"white"}
              size={24}
            />

            <Animated.Text
              style={[
                styles.fullname,
                styles.navName,
                {
                  opacity: nameOpacityInterpolation,
                  left: nameInterpolation,
                },
              ]}
            >
              {fullname}
            </Animated.Text>
            <MaterialCommunityIcons
              style={styles.cheron}
              name="dots-vertical"
              color={"white"}
              size={24}
            />
          </View>
          <Animated.Image
            source={require("../assets/joseph.jpg")}
            style={{
              ...styles.avatar,
              height: imageHeight,
              width: imageHeight,
              bottom: -MAX_IMAGE_HEIGHT / 3,
              transform: [
                { translateX: imageXInterpolation },
                { translateY: imageYInterpolation },
              ],
            }}
          />
        </Animated.View>
      </Animated.View>
      <ScrollView
        style={{ flex: 1 }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
          }
        )}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.contents}>
            <Text style={styles.fullname}>{fullname}</Text>
            <Text style={styles.username}>{username}</Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                gap: 10,
                marginTop: 50,
              }}
            >
              {[1, 2, 3].map((_, index) => (
                <View
                  key={index}
                  style={{
                    flex: 1,
                    height: 100,
                    borderWidth: 1,
                    borderColor: "#CCC",
                    borderRadius: 10,
                  }}
                />
              ))}
            </View>
            <Text
              style={{
                marginTop: 40,
                textAlign: "center",
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              WhatsApp Profile Animation
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});

export default WhatsAppProfile;

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",

    borderRadius: 50,
    left: "50%",
    minHeight: MIN_IMAGE_HEIGHT,
    minWidth: MIN_IMAGE_HEIGHT,
  },
  contents: {
    width: "100%",
    marginHorizontal: "auto",
    marginTop: 220,
    height: 800,
    paddingHorizontal: 16,
  },
  fullname: { textAlign: "center", fontWeight: "500", fontSize: 18 },
  username: { textAlign: "center", color: "#666" },
  navItems: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row",
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  navName: {
    position: "absolute",
    top: 0,
    color: "white",
  },
});
