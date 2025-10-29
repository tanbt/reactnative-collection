import React, { memo, useCallback, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { Colors } from "../util/constants/color";
import { SPACING } from "../util/constants/Spacing";

interface Props {
  /**
   * The height of the whole component including the indicator.
   * Should be >= the height of child cards.
   */
  height?: number;
  autoPlay?: boolean;
  showIndicator?: boolean;
  parallaxScrollingOffset?: number;
  parallaxScrollingScale?: number;
  numItems?: number;
  children: React.ReactNode[];
  onSnapToItem?: (index: number) => void;
  initialIndex?: number;
  autoPlayInterval?: number;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export function VinaCarousel({
  children,
  showIndicator = true,
  autoPlay = false,
  height,
  parallaxScrollingOffset = 10,
  parallaxScrollingScale = 0.9,
  numItems = 1,
  onSnapToItem,
  initialIndex = 0,
  autoPlayInterval = 3000,
}: Props) {
  const progressValue = useSharedValue<number>(initialIndex);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  // Filter out invalid elements
  const validChildren = React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  );

  // Calculate item width based on screen width and number of items
  const itemWidth = SCREEN_WIDTH / numItems;

  // Get inactive dot color based on theme
  const inactiveDotColor = Colors.WHITE[20];

  // Handle index change
  const handleProgressChange = useCallback(
    (offsetProgress: number, absoluteProgress: number) => {
      progressValue.value = absoluteProgress;

      if (
        onSnapToItem &&
        Math.abs(Math.round(offsetProgress) - offsetProgress) < 0.01
      ) {
        const index = Math.round(absoluteProgress % validChildren.length);
        if (index !== activeIndex) {
          runOnJS(setActiveIndex)(index);
          runOnJS(onSnapToItem)(index);
        }
      }
    },
    [progressValue, onSnapToItem, validChildren.length, activeIndex]
  );

  return (
    <GestureHandlerRootView style={styles.rootView}>
      <View style={styles.container}>
        <Carousel
          loop={validChildren.length > 1}
          width={itemWidth}
          height={height || itemWidth * 0.75}
          autoPlay={autoPlay && validChildren.length > 1}
          autoPlayInterval={autoPlayInterval}
          data={validChildren}
          scrollAnimationDuration={500}
          onProgressChange={handleProgressChange}
          defaultIndex={initialIndex}
          renderItem={({ item }) => item}
          style={{ width: SCREEN_WIDTH }}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale,
            parallaxScrollingOffset,
          }}
          enabled={validChildren.length > 1}
        />

        {showIndicator && validChildren.length > 1 && (
          <View style={styles.paginationContainer}>
            {validChildren.map((_, index) => (
              <PaginationDot
                key={index}
                index={index}
                length={validChildren.length}
                animValue={progressValue}
                activeColor={Colors.PRIMARY[500]}
                inactiveColor={inactiveDotColor}
              />
            ))}
          </View>
        )}
      </View>
    </GestureHandlerRootView>
  );
}

interface PaginationDotProps {
  index: number;
  length: number;
  animValue: Animated.SharedValue<number>;
  activeColor: string;
  inactiveColor: string;
}

// eslint-disable-next-line react/display-name
const PaginationDot = memo(
  ({
    index,
    length,
    animValue,
    activeColor,
    inactiveColor,
  }: PaginationDotProps) => {
    const dotSize = 8;

    const animStyle = useAnimatedStyle(() => {
      let inputRange = [index - 1, index, index + 1];
      let outputRange = [-dotSize, 0, dotSize];

      if (index === 0 && animValue?.value > length - 1) {
        inputRange = [length - 1, length, length + 1];
        outputRange = [-dotSize, 0, dotSize];
      }

      const translateX = interpolate(
        animValue?.value,
        inputRange,
        outputRange,
        Extrapolate.CLAMP
      );

      const scale = interpolate(
        animValue?.value,
        [index - 1, index, index + 1],
        [0.8, 1, 0.8],
        Extrapolate.CLAMP
      );

      return {
        transform: [{ translateX }, { scale }],
      };
    }, [animValue, index, length]);

    return (
      <View
        style={[
          styles.paginationDot,
          {
            backgroundColor: inactiveColor,
            width: dotSize,
            height: dotSize,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.paginationDotActive,
            { backgroundColor: activeColor },
            animStyle,
          ]}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  rootView: {
    width: "100%",
  },
  container: {
    alignItems: "center",
    width: "100%",
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SPACING.SMALL,
    height: 20,
  },
  paginationDot: {
    borderRadius: 50,
    overflow: "hidden",
    marginHorizontal: 4,
  },
  paginationDotActive: {
    borderRadius: 50,
    width: "100%",
    height: "100%",
  },
});
