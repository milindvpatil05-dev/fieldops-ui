import { type StyleProp, type ViewStyle, type TextStyle } from 'react-native';

export type BadgeStatus = 'open' | 'in-progress' | 'blocked' | 'done';

export interface BadgeProps {
  status: BadgeStatus;
  label?: string;
  className?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
