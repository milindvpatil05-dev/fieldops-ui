import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import clsx from 'clsx';
import { type SelectProps } from './Select.types';
import { colors } from '../../theme/colors';
import {
  selectBase,
  selectBorderColor,
  selectTriggerStyle,
  selectIconStyle,
  selectMetrics,
  selectDropdownStyle,
  selectOptionStyle,
  selectErrorTextStyle,
} from '../../theme/select';

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  error,
  className,
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState<string | undefined>(value);
  const selectedValue = value ?? internalValue;
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );
  const longestLabelLength = Math.max(
    placeholder?.length ?? 0,
    ...options.map((option) => option.label.length)
  );
  const dropdownWidth =
    longestLabelLength * selectMetrics.characterWidth +
    selectMetrics.horizontalPadding +
    selectMetrics.iconGap +
    selectMetrics.iconWidth;

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const merged = clsx(
    selectBase,
    error ? 'border-danger' : 'border-border',
    className
  );

  const selectOption = (nextValue: string) => {
    if (value === undefined) setInternalValue(nextValue);
    onChange(nextValue);
    setIsOpen(false);
  };

  return (
    <View style={{ alignSelf: 'flex-start' }}>
      <TouchableOpacity
        className={merged}
        style={{
          width: dropdownWidth,
          borderColor: error
            ? selectBorderColor.error
            : selectBorderColor.default,
          ...selectTriggerStyle,
          ...style,
        }}
        onPress={() => setIsOpen((open) => !open)}
        accessibilityRole="button"
        accessibilityState={{ expanded: isOpen }}
      >
        <Text
          numberOfLines={1}
          style={{ color: selectedOption ? colors.fg : colors['fg-muted'] }}
        >
          {selectedOption?.label ?? placeholder ?? 'Select an option'}
        </Text>
        <Text accessibilityLabel="Open options" style={selectIconStyle}>
          {isOpen ? '⌃' : '⌄'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            width: dropdownWidth,
            ...selectDropdownStyle,
          }}
        >
          {options.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => selectOption(item.value)}
              style={selectOptionStyle}
            >
              <Text
                style={{
                  color:
                    item.value === selectedValue ? colors.primary : colors.fg,
                }}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
      {error && <Text style={selectErrorTextStyle}>Error</Text>}
    </View>
  );
};
