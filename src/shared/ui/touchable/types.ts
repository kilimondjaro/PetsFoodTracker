import type { ImpactFeedbackStyle } from 'expo-haptics';
import type React from 'react';

export type TouchableProps = {
  children: React.ReactNode;
  feedback?: ImpactFeedbackStyle;
  isDisabled?: boolean;
  onPress: () => void;
};
