import { colors } from './colors';
import { radius } from './radius';
import { spacing } from './spacing';

export const badgeVariants = {
  'open': { container: 'bg-surface', text: 'text-fg-muted' },
  'in-progress': { container: 'bg-primary', text: 'text-primary-fg' },
  'blocked': { container: 'bg-warning', text: 'text-primary-fg' },
  'done': { container: 'bg-success', text: 'text-primary-fg' },
};

export const badgeBase = 'px-2 py-1 rounded-md';

export const badgeBaseStyle = {
  borderRadius: radius.md,
  paddingHorizontal: spacing[2],
  paddingVertical: spacing[1],
};

export const badgeTextColors: Record<string, string> = {
  'text-fg-muted': colors['fg-muted'],
  'text-primary-fg': colors['primary-fg'],
  'text-danger': colors.danger,
  'text-fg': colors.fg,
};
