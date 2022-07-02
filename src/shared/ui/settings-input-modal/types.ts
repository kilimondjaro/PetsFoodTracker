import type { TextInputProps } from 'react-native';

export type SettingsInputType = string | number | null;

export type SettingsInputModalProps<T extends SettingsInputType> = {
  initialValue: T;
  title: string;
  keyboardType?: TextInputProps['keyboardType'];
  closeModal: () => void;
  onSave: (value: T) => void;
};
