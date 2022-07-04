import type { TextInputProps } from 'react-native';
import type { TextInputType } from 'src/shared/ui/text-input/types';

export type SettingsInputType = string | number | null;

export type SettingsInputModalProps<T extends SettingsInputType> = {
  inputType?: TextInputType;
  initialValue: T;
  title: string;
  keyboardType?: TextInputProps['keyboardType'];
  closeModal: () => void;
  onSave: (value: T) => void;
};
