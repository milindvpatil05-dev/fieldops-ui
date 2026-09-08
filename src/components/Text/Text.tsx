import React from 'react';
import { Text as RNText } from 'react-native';
import clsx from 'clsx';
import { type TextProps } from './Text.types';
import { textVariants } from '../../theme/text';
import { colors } from '../../theme/colors';

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'title',
  color = 'fg',
  className,
  style,
}) => {
  const merged = clsx(textVariants[variant], `text-${color}`, className);
  return (
    <RNText className={merged} style={[{ color: colors[color] }, style]}>
      {children}
    </RNText>
  );
};
