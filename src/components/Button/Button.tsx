import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
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
  buttonIconSpacing,
  buttonDisabledOpacity,
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
        disabled && { opacity: buttonDisabledOpacity },
        style,
      ]}
      disabled={disabled || loading}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <>
          {leadingIcon ? (
            <React.Fragment>
              <View
                testID="button-leading-icon"
                style={
                  leadingIcon ? { marginRight: buttonIconSpacing } : undefined
                }
              >
                {leadingIcon}
              </View>
            </React.Fragment>
          ) : null}
          <Text
            className={clsx(
              buttonTextVariants[variant],
              buttonSizes[size].match(/text-\w+/)?.[0]
            )}
            style={[
              buttonTextSizeStyles[size],
              { color: textColor, textAlign: 'center' },
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
