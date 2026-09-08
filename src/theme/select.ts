import { colors } from './colors';
import { radius } from './radius';
import { spacing } from './spacing';
import { textFieldBase, textFieldBorderColor } from './textField';

export const selectBase = textFieldBase;

export const selectBorderColor = textFieldBorderColor;

export const selectTriggerStyle = {
  borderWidth: 1,
  borderRadius: radius.md,
  paddingHorizontal: spacing[3],
  paddingVertical: spacing[2],
  paddingRight: 28,
  height: 42,
};

export const selectIconStyle = {
  position: 'absolute' as const,
  right: spacing[2],
  top: 10,
  fontSize: 16,
  lineHeight: 16,
  color: colors['fg-muted'],
};

export const selectMetrics = {
  characterWidth: 8,
  horizontalPadding: spacing[6],
  iconWidth: 16,
  iconGap: spacing[2],
};

export const selectDropdownStyle = {
  marginTop: spacing[1],
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: radius.md,
  backgroundColor: colors.bg,
};

export const selectOptionStyle = {
  paddingHorizontal: spacing[3],
  paddingVertical: 10,
};

export const selectErrorTextStyle = {
  color: colors.danger,
  marginTop: spacing[1],
};
