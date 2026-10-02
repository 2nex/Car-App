import React from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

type GradientProps = ViewProps & {
  colors: string[];
  locations?: number[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
};

// Browser equivalent of the native gradient; native builds retain the original module.
export default function LinearGradient({colors, locations, start = {x: 0.5, y: 0}, end = {x: 0.5, y: 1}, style, ...props}: GradientProps) {
  const angle = Math.atan2(end.x - start.x, start.y - end.y) * 180 / Math.PI;
  const stops = colors.map((color, index) => locations?.[index] == null ? color : `${color} ${locations[index] * 100}%`);
  const gradientStyle: ViewStyle & {backgroundImage: string} = {backgroundImage: `linear-gradient(${angle}deg, ${stops.join(', ')})`};
  return <View {...props} style={[StyleSheet.flatten(style), gradientStyle]} />;
}
