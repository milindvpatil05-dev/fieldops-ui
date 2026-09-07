import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import clsx from 'clsx';
import { type ButtonProps } from './Button.types';
import {
  buttonBase,
  buttonSizes,
  buttonVariants,
  buttonTextVariants,
  buttonVariantStyles,
  buttonBaseStyle,
  buttonSizeStyles,
  buttonTextSizeStyles,
} from '../../theme/button';
import { colors } from '../../theme/colors';

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'md',
  disabled,
  loading,
  leadingIcon,
  onPress,
  className,
  style,
  textStyle,
}) => {
  const merged = clsx(
    buttonBase,
    buttonSizes[size],
    buttonVariants[variant],
    className
  );
  const textColor = {
    primary: colors['primary-fg'],
    secondary: colors.fg,
    ghost: colors.fg,
    destructive: colors['primary-fg'],
  }[variant];

  return (
    <TouchableOpacity
      className={merged}
      style={[
        buttonBaseStyle,
        buttonSizeStyles[size],
        buttonVariantStyles[variant],
        disabled && { opacity: 0.5 },
        style,
      ]}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <>
          {leadingIcon}
          <Text
            className={clsx(
              'ml-2',
              buttonTextVariants[variant],
              buttonSizes[size].match(/text-\w+/)?.[0]
            )}
            style={[
              buttonTextSizeStyles[size],
              { color: textColor },
              textStyle,
            ]}
          >
            {label}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};
