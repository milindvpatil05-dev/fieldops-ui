import { type ReactNode } from 'react';
import {
  type GestureResponderEvent,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leadingIcon?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  className?: string; // consumer override (NativeWind)
  style?: StyleProp<ViewStyle>; // consumer override (StyleSheet)
  textStyle?: StyleProp<TextStyle>; // consumer override for label
}
