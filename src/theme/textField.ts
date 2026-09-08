import { colors } from './colors';
import { radius } from './radius';
import { spacing } from './spacing';

export const textFieldBase = 'border rounded-md px-3 py-2';

export const textFieldBaseStyle = {
  borderWidth: 1,
  borderRadius: radius.md,
  paddingHorizontal: spacing[3],
  paddingVertical: spacing[2],
};

export const textFieldBorderColor = {
  default: colors.border,
  error: colors.danger,
};
