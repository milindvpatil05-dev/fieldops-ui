import React from 'react';
import { TextInput, View } from 'react-native';
import clsx from 'clsx';
import { type TextFieldProps } from './TextField.types';
import { Text } from '../Text';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme';

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  helperText,
  helperTextColor,
  error,
  rightAdornment,
  value,
  onChange,
  className,
  style,
  textStyle,
  ...rest
}) => {
  const merged = clsx(
    'border rounded-md px-3 py-2',
    error ? 'border-danger' : 'border-border',
    className
  );
  const inputStyle = {
    borderWidth: 1,
    borderColor: error ? colors.danger : colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[2],
  };

  return (
    <View style={style}>
      {label && <Text className="text-label mb-1">{label}</Text>}
      <View className="flex-row items-center">
        <TextInput
          className={merged}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          style={[inputStyle, textStyle]}
          {...rest}
        />
        {rightAdornment}
      </View>
      {helperText && (
        <Text
          variant="caption"
          color={helperTextColor ?? (error ? 'danger' : 'fg-muted')}
          className="mt-1"
        >
          {helperText}
        </Text>
      )}
    </View>
  );
};
