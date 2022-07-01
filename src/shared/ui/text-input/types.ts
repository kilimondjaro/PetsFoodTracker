import type { TextInputProps as RNTextInputProps } from 'react-native';

export type TextInputProps = Pick<
  RNTextInputProps,
  'onChangeText' | 'value' | 'placeholder'
>;
