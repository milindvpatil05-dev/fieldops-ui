import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import clsx from 'clsx';
import { type SelectProps } from './Select.types';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';

const selectStyles = {
  trigger: {
    paddingRight: 28,
    height: 42,
  },
  icon: {
    position: 'absolute' as const,
    right: 8,
    top: 10,
    fontSize: 16,
    lineHeight: 16,
    color: colors['fg-muted'],
  },
};

const selectMetrics = {
  characterWidth: 8,
  horizontalPadding: 24,
  iconWidth: 16,
  iconGap: 8,
};

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
    'border rounded-md px-3 py-2',
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
          borderWidth: 1,
          borderColor: error ? colors.danger : colors.border,
          borderRadius: radius.md,
          paddingHorizontal: 12,
          paddingVertical: 8,
          ...selectStyles.trigger,
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
        <Text accessibilityLabel="Open options" style={selectStyles.icon}>
          {isOpen ? '⌃' : '⌄'}
        </Text>
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            width: dropdownWidth,
            marginTop: 4,
            borderWidth: 1,
            borderColor: colors.border,
            borderRadius: radius.md,
            backgroundColor: colors.bg,
          }}
        >
          {options.map((item) => (
            <TouchableOpacity
              key={item.value}
              onPress={() => selectOption(item.value)}
              style={{ paddingHorizontal: 12, paddingVertical: 10 }}
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
      {error && (
        <Text style={{ color: colors.danger, marginTop: 4 }}>Error</Text>
      )}
    </View>
  );
};
