import { colors } from './colors';
import { radius } from './radius';
import { spacing } from './spacing';

export const buttonBase = 'rounded-md flex-row items-center justify-center';

export const buttonSizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-3 text-base',
  lg: 'px-5 py-4 text-lg',
};

export const buttonVariants = {
  primary: 'bg-primary',
  secondary: 'bg-surface border border-border',
  ghost: 'bg-transparent',
  destructive: 'bg-danger',
};

export const buttonTextVariants = {
  primary: 'text-primary-fg',
  secondary: 'text-fg',
  ghost: 'text-fg',
  destructive: 'text-primary-fg',
};

export const buttonVariantStyles = {
  primary: { backgroundColor: colors.primary },
  secondary: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ghost: { backgroundColor: 'transparent' },
  destructive: { backgroundColor: colors.danger },
};

export const buttonBaseStyle = {
  borderRadius: radius.md,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

export const buttonSizeStyles = {
  sm: { paddingHorizontal: spacing[3], paddingVertical: spacing[2] },
  md: { paddingHorizontal: spacing[4], paddingVertical: spacing[3] },
  lg: { paddingHorizontal: 20, paddingVertical: spacing[4] },
};

export const buttonTextSizeStyles = {
  sm: { fontSize: 14 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
};

export const buttonIconSpacing = spacing[2];

export const buttonDisabledOpacity = 0.5;
