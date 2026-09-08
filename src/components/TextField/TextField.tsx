import React from 'react';
import { TextInput, View } from 'react-native';
import clsx from 'clsx';
import { type TextFieldProps } from './TextField.types';
import { Text } from '../Text';
import {
  textFieldBase,
  textFieldBaseStyle,
  textFieldBorderColor,
} from '../../theme/textField';

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
    textFieldBase,
    error ? 'border-danger' : 'border-border',
    className
  );
  const inputStyle = {
    ...textFieldBaseStyle,
    borderColor: error
      ? textFieldBorderColor.error
      : textFieldBorderColor.default,
  };

  return (
    <View style={style}>
      {label && (
        <Text className="text-label mb-1" variant="label">
          {label}
        </Text>
      )}
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
