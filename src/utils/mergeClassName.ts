import clsx from 'clsx';

/**
 * Merge internal className strings with consumer overrides.
 * Internal defaults come first, consumer overrides last.
 *
 * Example:
 *   mergeClassName("bg-primary text-white", "bg-green-500")
 *   => "bg-primary text-white bg-green-500"
 */
export function mergeClassName(
  ...classes: (string | undefined | null | false)[]
): string {
  return clsx(classes);
}
