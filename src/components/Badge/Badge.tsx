import React from 'react';
import { View, Text } from 'react-native';
import clsx from 'clsx';
import { type BadgeProps } from './Badge.types';
import { colors } from '../../theme/colors';

export const Badge: React.FC<BadgeProps> = ({
  status,
  label,
  className,
  style,
  textStyle,
}) => {
  const variants = {
    'open': 'bg-surface text-fg-muted',
    'in-progress': 'bg-primary text-primary-fg',
    'blocked': 'bg-warning text-primary-fg',
    'done': 'bg-success text-primary-fg',
  };
  const variantClasses = variants[status].split(' ');
  const textClass =
    variantClasses.find((className) => className.startsWith('text-')) ??
    'text-fg';
  const containerClasses = variantClasses.filter(
    (className) => !className.startsWith('text-')
  );
  const textColors: Record<string, string> = {
    'text-fg-muted': colors['fg-muted'],
    'text-primary-fg': colors['primary'],
    'text-danger': colors.danger,
    'text-fg': colors.fg,
  };

  const merged = clsx('px-2 py-1 rounded-md', containerClasses, className);

  return (
    <View className={merged} style={style}>
      <Text
        className={textClass}
        style={[{ color: textColors[textClass] }, textStyle]}
      >
        {label ?? status}
      </Text>
    </View>
  );
};
