import { colors } from './colors';
import { radius } from './radius';
import { spacing } from './spacing';

export const badgeVariants = {
  'open': { container: 'bg-surface', text: 'text-fg-muted' },
  'in-progress': { container: 'bg-surface', text: 'text-primary' },
  'blocked': { container: 'bg-surface', text: 'text-warning' },
  'done': { container: 'bg-surface', text: 'text-success' },
};

export const badgeBase = 'px-2 py-1 rounded-md';

export const badgeBaseStyle = {
  borderRadius: radius.md,
  paddingHorizontal: spacing[2],
  paddingVertical: spacing[1],
};

export const badgeTextColors: Record<string, string> = {
  'text-fg-muted': colors['fg-muted'],
  'text-primary': colors.primary,
  'text-warning': colors.warning,
  'text-success': colors.success,
  'text-danger': colors.danger,
  'text-fg': colors.fg,
};
