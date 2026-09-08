import React from 'react';
import { View, Text } from 'react-native';
import clsx from 'clsx';
import { type BadgeProps } from './Badge.types';
import {
  badgeVariants,
  badgeBase,
  badgeBaseStyle,
  badgeTextColors,
} from '../../theme/badge';

export const Badge: React.FC<BadgeProps> = ({
  status,
  label,
  className,
  style,
  textStyle,
}) => {
  const { container, text } = badgeVariants[status];
  const merged = clsx(badgeBase, container, className);

  return (
    <View className={merged} style={[badgeBaseStyle, style]}>
      <Text
        className={text}
        style={[{ color: badgeTextColors[text] }, textStyle]}
      >
        {label ?? status}
      </Text>
    </View>
  );
};
