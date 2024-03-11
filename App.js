import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FadeInView from "./lessons/FadeInView_1";
import Interpolation_2 from "./lessons/Interpolation_2";
import WhatsAppProfile from "./lessons/WhatsAppProfile";
import AnimatedFunctionsProps from "./lessons/AnimatedFunctionsProps";
import AnimatedDotValueXY from "./lessons/Animated.ValueXY";
import ParallelAnimation from "./lessons/ParallelAnimation";
import SequenceAnimation from "./lessons/SequenceAnimation";
import LoopAnimation from "./lessons/LoopAnimation";
import DelayedAnimation from "./lessons/DelayedAnimation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="darkslateblue" />

      {/* <FadeInView /> */}
      {/* <Interpolation_2 /> */}
      {/* <WhatsAppProfile /> */}
      {/* <AnimatedFunctionsProps /> */}
      {/* <AnimatedDotValueXY /> */}
      <ParallelAnimation />
      {/* <SequenceAnimation /> */}
      {/* <LoopAnimation /> */}
      {/* <DelayedAnimation /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**


31. Using Animated.parallel() Method
32. Using Animated.sequence() Method
33. Creating Custom Easing Functions
34. Implementing Bezier Curves for Custom Easing
35. Understanding Animated.event() Method
36. Handling Animated Events
37. Creating Drag and Drop Animations
38. Implementing Drag and Drop with PanResponder
39. Integrating Animated with ScrollView
40. Creating Animated Scroll Effects
41. Implementing Pull-to-Refresh Animation
42. Animating Components on Mount
43. Animating Components on Unmount
44. Understanding Animated.add() Method
45. Using Animated.add() for Complex Animations
46. Creating Animated Progress Bars
47. Implementing Circular Progress Indicator
48. Creating Animated Buttons
49. Implementing Button Press Animations
50. Integrating Animated with TouchableOpacity
51. Using Animated.timing() for Button Animations
52. Implementing Animated Input Fields
53. Creating Animated Form Validation
54. Implementing Shake Animation for Invalid Inputs
55. Creating Animated Alerts
56. Implementing Animated Modal Windows
57. Creating Animated Tab Navigation
58. Implementing Tab Change Animations
59. Integrating Animated with TabNavigator
60. Creating Animated Drawer Navigation
61. Implementing Drawer Open/Close Animations
62. Using Animated.timing() for Drawer Animations
63. Creating Animated Bottom Tab Navigation
64. Implementing Bottom Tab Change Animations
65. Integrating Animated with BottomTabNavigator
66. Creating Animated Stack Navigation
67. Implementing Stack Transition Animations
68. Using Animated.timing() for Stack Animations
69. Integrating Animated with createStackNavigator
70. Creating Animated Carousel
71. Implementing Carousel Transition Animations
72. Using Animated.timing() for Carousel Animations
73. Integrating Animated with FlatList
74. Creating Animated Swipeable List Items
75. Implementing Swipe Animation for List Items
76. Using Animated.timing() for List Item Animations
77. Integrating Animated with SwipeableFlatList
78. Creating Animated Charts
79. Implementing Animated Line Charts
80. Using Animated.timing() for Line Chart Animations
81. Integrating Animated with LineChart
82. Creating Animated Bar Charts
83. Implementing Animated Stacked Bar Charts
84. Using Animated.timing() for Bar Chart Animations
85. Integrating Animated with BarChart
86. Creating Animated Pie Charts
87. Implementing Animated Donut Charts
88. Using Animated.timing() for Pie Chart Animations
89. Integrating Animated with PieChart
90. Creating Animated Maps
91. Implementing Animated Marker Animations
92. Using Animated.timing() for Marker Animations
93. Integrating Animated with MapView
94. Creating Animated Splash Screens
95. Implementing Animated Logo Splash
96. Using Animated.timing() for Splash Screen Animations
97. Integrating Animated with AppLoading
98. Creating Animated Onboarding Screens
99. Implementing Step-by-Step Onboarding Animations
100. Using Animated.timing() for Onboarding Animations

Feel free to ask about any specific topic from this list, and I'll be happy to provide more detailed information and guidance on it!

 */
