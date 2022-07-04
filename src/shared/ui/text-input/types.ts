import type { TextInputProps as RNTextInputProps } from 'react-native';

export type TextInputType = 'number' | 'string';

export type TextInputProps<T extends number | string> = RNTextInputProps & {
  type?: TextInputType;
  onChangeText: (value: T) => void;
  value?: T;
};
