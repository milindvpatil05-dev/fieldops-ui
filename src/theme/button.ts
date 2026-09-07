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
  primary: { backgroundColor: '#1D4ED8' },
  secondary: {
    backgroundColor: '#F6F7F9',
    borderWidth: 1,
    borderColor: '#E3E6EA',
  },
  ghost: { backgroundColor: 'transparent' },
  destructive: { backgroundColor: '#DC2626' },
};

export const buttonBaseStyle = {
  borderRadius: 10,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

export const buttonSizeStyles = {
  sm: { paddingHorizontal: 12, paddingVertical: 8 },
  md: { paddingHorizontal: 16, paddingVertical: 12 },
  lg: { paddingHorizontal: 20, paddingVertical: 16 },
};

export const buttonTextSizeStyles = {
  sm: { fontSize: 14 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
};
