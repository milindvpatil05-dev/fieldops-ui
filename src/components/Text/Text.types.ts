import { type ReactNode } from 'react';
import { type StyleProp, type TextStyle } from 'react-native';

export type TextVariant = 'title' | 'heading' | 'body' | 'label' | 'caption';
export type TextColor = 'fg' | 'fg-muted' | 'primary' | 'danger' | 'success';

export interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
  style?: StyleProp<TextStyle>;
}
