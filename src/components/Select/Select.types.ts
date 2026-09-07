import { StyleProp, ViewStyle } from 'react-native';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: boolean;
  className?: string;
  style?: StyleProp<ViewStyle>;
}
