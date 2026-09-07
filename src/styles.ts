import { StyleSheet } from 'react-native';

export const buttonBase = {
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export const buttonSizes = StyleSheet.create({
  sm: { paddingHorizontal: 12, paddingVertical: 8 },
  md: { paddingHorizontal: 16, paddingVertical: 12 },
  lg: { paddingHorizontal: 20, paddingVertical: 16 },
});

export const buttonVariants = StyleSheet.create({
  primary: { backgroundColor: '#1D4ED8' }, // blue
  secondary: {
    backgroundColor: '#F6F7F9',
    borderWidth: 1,
    borderColor: '#E3E6EA',
  },
  ghost: { backgroundColor: 'transparent' },
  destructive: { backgroundColor: '#DC2626' }, // red
});

export const textVariants = StyleSheet.create({
  title: { fontSize: 24, fontWeight: 'bold' },
  heading: { fontSize: 20, fontWeight: '600' },
  body: { fontSize: 16 },
  label: { fontSize: 14, fontWeight: '500' },
  caption: { fontSize: 12, color: '#6B7280' }, // gray
});
