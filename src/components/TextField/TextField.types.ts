import { type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { type ReactNode } from 'react';
import { type TextColor } from '../Text/Text.types';

export interface TextFieldProps {
  label?: string;
  placeholder?: string;
  helperText?: string;
  helperTextColor?: TextColor;
  error?: boolean;
  rightAdornment?: ReactNode;
  value?: string;
  onChange?: (text: string) => void;
  className?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
